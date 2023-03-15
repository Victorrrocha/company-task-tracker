import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Thread } from '../thread.model';
import { ThreadService } from '../thread.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-thread-new',
  templateUrl: './thread-new.component.html',
  styleUrls: ['./thread-new.component.scss']
})
export class ThreadNewComponent implements OnInit {
  newThreadForm: FormGroup = new FormGroup({});
  createdTags: Set<string> = new Set();
  matchedTags: Array<string> = [];
  addedTags: Array<string> = [];
  constructor(private fb: FormBuilder, private threadService: ThreadService, private router: Router) {}
  
  ngOnInit(): void {
    this.createForm();
    this.createdTags = this.threadService.getAllTags();
  }

  createForm() {
    this.newThreadForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      tags: [''],
    })
  }

  get tags() {
    return this.newThreadForm.get('tags') as FormControl;
  }

  addTag(tag = '') {
    if (tag) { // tag already exists
      if (!this.addedTags.includes(tag)) {
        this.addedTags.push(tag);
      }
    } else {
      this.createdTags.add(this.tags.value);
      this.addedTags.push(this.tags.value);
    }
    this.newThreadForm.patchValue({tags: ''});
    this.matchedTags = [];
  }

  updateMatchedTags() {
    this.matchedTags = [];
    const inputTerm = this.newThreadForm.get('tags')?.value;
    if (inputTerm) {
      this.createdTags.forEach((tag) => {
        if (tag.includes(inputTerm) && this.addedTags.indexOf(tag) === -1) {
          this.matchedTags.push(tag)
        }
      });
    } else {
      this.matchedTags = [];
    }
  }

  tagFirstOfItsName() {
    const inputTerm = this.newThreadForm.get('tags')?.value;
    return !this.createdTags.has(inputTerm);
  }

  onSubmit() {
    if (this.newThreadForm.valid) {
      const {title, content} = this.newThreadForm.value;
      const tags = this.addedTags;
      const id = uuidv4();
      const author = 'Jane Doe'; // Get Current User
      const newThread: Thread = {
        id,
        title,
        content,
        author,
        tags
      }
      this.threadService.addNewThread(newThread);
      this.clearForm();
      this.router.navigate(['/']);
    }
  }

  clearForm() {
    this.newThreadForm.patchValue({
      title: '',
      content: '',
      tags: ''
    })
    this.newThreadForm.markAsPending();
    this.newThreadForm.markAsUntouched();
  }
}
