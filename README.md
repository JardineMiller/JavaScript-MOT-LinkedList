# Hi

## Getting started

Hello, CodeClan people. This is a simple IntelliJ IDEA project to help
you get started quickly with the hands-on technical interview practice
session. This asssumes that you're using IntelliJ IDEA Community
edition. You can [download this free for your
platform](https://www.jetbrains.com/idea/download/) (MacBook/OSX for
most of you, I guess).

Simply git clone this repository to get started:

```$ git clone git@github.com:13coders/codeclan-techtest.git```

You'll be able to commit as you go along, but not push to this
repository. If you want to push, the best approach is to fork this
first to your own repository. If you clone this one and then change
yout mind later on, you can switch to a different upstream repository
if you want to keep it somewhere - [read the GitHub docs for
this](https://help.github.com/articles/changing-a-remote-s-url/)

## Suggested list of tests

Writing a test list is a practice that Kent Beck suggests in "Test
Driven Development By Example". I think it works well to have a
mini-roadmap, and for technical interviews it means you can make
progress and lock it in by having a working test, and the safety of a
commit. As a plus, it also shows an interviewer that you know how to
use source control and write tests...

### Easier

- Create a new list, assert that it has ```size()==0```
- Insert a single value 33, assert that ```size()==1```
- Insert a single value 42, read the head value, should be ```head()==42```
- Insert values 42 then 43, should be ```head()==43```
- Insert values 42 then 43, should be ```size()==2```
- For an empty list, for any value n, should be ```countOf(n)==0```

### Medium...er

- Insert value 42, should be that ```countOf(42)==1```
- Reading ```head()``` for an empty list should throw an exception
- Add two identical values 99, should be that ```countOf(99)==2```
- Insert 41 then 42, remove at position zero, should be ```head()==41```

### Harder

- All the ```insertAfter()``` logic
- All the ```removeAt()``` logic where the index > 0
