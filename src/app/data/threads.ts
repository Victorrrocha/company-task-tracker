import { Thread } from "../threads/thread.model";

const threads: Thread[] = [
    {
        id: 1,
        title: "Thread title",
        author: "Jane Doe",
        tags: ["tag1", "tag2"],
        commentsId: [32, 45],
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan sapien et ornare congue. Maecenas vel leo sit amet velit porta tincidunt eu eu leo. Aliquam nec leo eget eros congue pellentesque. Nulla luctus convallis imperdiet. Vestibulum dignissim lobortis viverra. Mauris suscipit eros eu bibendum vestibulum. Sed viverra scelerisque luctus.
        Vivamus vitae neque volutpat, venenatis magna eu, ullamcorper mi. Phasellus iaculis vitae magna sed porttitor. Praesent id interdum lectus, eu tempor enim. Phasellus ut magna sed libero tristique consequat quis non augue. Vivamus fermentum est vitae tristique blandit. In ipsum massa, vulputate ac odio at, imperdiet auctor est. Nulla velit sem, posuere eleifend quam non, vulputate vehicula lectus. Integer ut sem et dui viverra faucibus. Mauris varius nisi turpis, sed elementum turpis lacinia non. Nulla facilisi. Morbi nec metus vel magna elementum accumsan.
        Donec pulvinar nisi elementum vehicula bibendum. Curabitur lacinia erat eget odio elementum hendrerit. Aliquam ultricies nisl ut ante eleifend, vel suscipit est aliquam. Sed congue sem elit, eget vehicula odio maximus nec. In ipsum dui, pretium eget lectus a, pretium mattis justo. Ut dignissim dolor a nisi condimentum, eu facilisis nisi lobortis. Intege`,   
    },
    {
        id: 2,
        title: "Another Thread title",
        author: "John Doe",
        tags: ["tag3", "tag4"],
        commentsId: [],
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan sapien et ornare congue. Maecenas vel leo sit amet velit porta tincidunt eu eu leo. Aliquam nec leo eget eros congue pellentesque. Nulla luctus convallis imperdiet. Vestibulum dignissim lobortis viverra. Mauris suscipit eros eu bibendum vestibulum. Sed viverra scelerisque luctus.
        Vivamus vitae neque volutpat, venenatis magna eu, ullamcorper mi. Phasellus iaculis vitae magna sed porttitor. Praesent id interdum lectus, eu tempor enim. Phasellus ut magna sed libero tristique consequat quis non augue. Vivamus fermentum est vitae tristiqd quam non, vulputate vehicula lectus. Integer ut sem et dui viverra faucibus. Mauris varius nisi turpis, sed elementum turpis lacinia non. Nulla facilisi. Morbi nec metus vel magna elementum accumsan.
        Donec pulvinar nisi elementum vehicula bibendum. Curabitur lacinia erat eget odio elementum hendrerit. Aliquam ultricies nisl ut ante eleifend, vel suscipit est aliquam. Sed congue sem elit, eget vehicula odio maximus nec. In ipsum dui, pretium eget lectus a, pretium mattis justo. Ut dignissim dolor a nisi condimentum, eu facilisis nisi lobortis. Intege`,   
    },
    {
        id: 3,
        title: "Yet Another Thread title",
        author: "John Downey",
        tags: ["tag3", "tag4"],
        commentsId: [],
        content: `ornare congue. Maecenas vel leo sit amet velit porta tincidunt eu eu leo. Aliquam nec leo eget eros congue pellentesque. Nulla luctus convallis imperdiet. Vestibulum dignissim lobortis viverra. Mauris suscipit eros eu bibendum vestibulum. Sed viverra scelerisque luctus.
        Vivamus vitae neque volutpat, venenatis magna eu, ullamcorper mi. Phasellus iaculis vitae magna sed porttitor. Praesent id interdum lectus, eu tempor enim. Phasellus ut magna sed libero tristique consequat quis non augue. Vivamus fermentum est vitae tristiqd quam non, vulputate vehicula lectus. Integer ut sem et dui viverra faucibus. Mauris varius nisi turpis, sed elementum turpis lacinia non. Nulla facilisi. Morbi nec metus vel magna elementum accumsan.
        Donec pulvinar nisi elementum vehicula bibendum. Curabitur lacinia erat eget odio elementum hendrerit. Aliquam ultricies nisl ut ante eleifend, vel suscipit est aliquam. Sed congue sem elit, eget vehicula odio maximus nec. In ipsum dui, pretium eget lectus a, pretium mattis justo. Ut dignissim dolor a nisi condimentum, eu facilisis nisi lobortis. Intege`,   
    }
]

export default threads;