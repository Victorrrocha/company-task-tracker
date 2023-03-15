import { Injectable } from '@angular/core';
import { ThreadNewComponent } from 'src/app/threads/thread-new/thread-new.component';

@Injectable({
  providedIn: 'root'
})
export class CheckUnsavedChangesGuard {
  canDeactivate(component: ThreadNewComponent) : boolean {
      if (component.newThreadForm.dirty) {
        if (confirm('Are you sure you want to leave?')) {
          return true;
        } else {
          return false;
        }
      }
      return true;
  }
}
