Renting out my time as a backend developer.
Implementing new designs for @D)I's wagtail website.

Don't try to convince me that outsource is good. Most of the times it is not.  

This time I felt how bad it is to exist around poor codebase, architecture, automation processes. If you're running a project with > 2 persons or it's not a prototype **DOCUMENT** everything you can.

```python
class SomePage(someParent):
  # ....
  article_1_title = TextField
  article_1_description = TextField
  article_1_image = ImageField
  article_2_title = TextField
  article_2_description = TextField
  article_2_image = ImageField
  article_3_title = TextField
  # ! NOTE ! This code is BAD
  # if you ever see code like this
  # ask owners to fix it, do your job.
  # And if nothing happens after months
  # just LEAVE the room.
  # ...

```

Peace ☀️
