# What Is A Test?

A test is the codifying of a defined scenario (given, when) and an expected behavior (then), based on our current understanding of the system.

> **Given** _this condition_  
> **When** _this action occurs_  
> **Then** _this expected state is present_

## Setup/Given

This is where you define what the state of the system looks like before any actions are performed.

- Is the user logged in?
- Is the user banned?
- Does user have permission to view post?

Each test has a limited budget for number of system state variables that are "in budget". Variables come at a cost of complexity when trying to fill out test coverage but we'll cover this later.

## Actions/When

This is where you define what actions are performed during the test.

- User creates a new post
- User likes a post
- PostService creates new post
- Query the post table for posts by user

## Assertions/Then

Examine the resulting system state. Does it match our expectations?

- User is redirected to newly created post
- Post like count is incremented
- User's posts query includes newly created post
- Returns all of user's posts

## Some Examples

> **Given** the user is logged in  
> **When** the user goes to login page  
> **Then** the user is redirected to home page

> **Given** the user is not logged in  
> **When** the user goes to login page  
> **Then** the user remains on the login page

> **Given** the user is logged in  
> **And** the user goes to the home page  
> **When** the page loads  
> **Then** the user's feed is populated

> **Given** the user is logged in  
> **And** the user goes to the home page  
> **When** the page loads  
> **Then** the default feed is populated

## Code Examples

This applies to tests in code as well. I'll often put comments to organize a code test.

```rust
fn div (a: usize, b: usize) -> usize {
    a / b
}

// Given
let a = 10;
let b = 2;

// When
let result = div(a, b);

// Then
assert_eq!(5, result);
```

## For Best Results

These aren't rules but you should fully understand why a test isn't doing these things:

- Setup should come before actions
- Actions should come before assertions
- Tests can have multiple assertions but they should all be asserting different aspects of the same expected behavior.
