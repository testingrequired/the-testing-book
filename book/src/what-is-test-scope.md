# What Is Test Scope?

Now that we've established what a test and unit is, let's talk about test scope. This book defines test scope as what units are included in the test's box and if they are controlled or not.

## Example

### Units

```mermaid
classDiagram
    class PostsController{
        +getById(id) Post
    }

    class PostsService{
        +getById(id) Post
    }

    class PermissionService{
        +canViewPost(postId, userId) boolean
    }
```

### Uncontrolled

```mermaid
architecture-beta
    group test(cloud)[Test]
    group uut(cloud)[UUT] in test
    group uncontrolled(cloud)[Uncontrolled] in test

    service posts_controller(cloud)[PostsController] in uut
    service posts_service(cloud)[PostsService] in uncontrolled
    service permission_service(database)[PermissionService] in uncontrolled

    posts_controller:R -- L:posts_service
    posts_controller:R -- L:permission_service
```

### Controlled

```mermaid
architecture-beta
    group test(cloud)[Test]
    group uut(cloud)[UUT] in test
    group controlled(cloud)[Controlled] in test

    service posts_controller(cloud)[PostsController] in uut
    service posts_service(cloud)[PostsService] in controlled
    service permission_service(database)[PermissionService] in controlled

    posts_controller:R -- L:posts_service
    posts_controller:R -- L:permission_service
```
