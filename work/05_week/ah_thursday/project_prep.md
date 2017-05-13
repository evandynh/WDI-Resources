# Project Prep!

Below are the necessary steps you must complete before you can begin writing the code for your app. They do not happen in order, but instead they all go on at the same time. They're broken this way arbitrarily.

Deliverables are at [the bottom](#deliverables).

## Planning

### Draw Wireframes

Create wireframes for your project. While you can use special applications to build your wireframes, please start by using "pen & paper" (or "marker & desk"). Take pictures and add them to your repo's `assets` folder and/or your Trello board. These are often called **Low-fidelity** wireframes.

Keep in mind, these discrete wireframes should be connected by "flows" (or arrows) describing how a user can arrive at any wireframed state/page from any other. For example, your wireframe of your login page should have an arrow pointing to the wireframe for wherever they're redirected to after sucessfully logging in. 


Wireframing links:

- [Beginner's Guide][guide]
- [Balsamiq][balsamiq] (Medium-fidelity wireframes)
- [Sketch][sketch] (High-fidelity wireframes)

[guide]:    http://webdesign.tutsplus.com/articles/a-beginners-guide-to-wireframing--webdesign-7399
[balsamiq]: https://balsamiq.com
[sketch]:   http://www.sketchapp.com
[bals-lay]: http://support.balsamiq.com/customer/portal/articles/615901
[ghfm]:     https://help.github.com/articles/github-flavored-markdown
[ghfm-tsk]: https://help.github.com/articles/writing-on-github/#task-lists

### Write User Stories

Create *user stories* for your game. Add them to your Project 2 Trello board. Make sure that your stories follow the format **ROLE**, **GOAL**, **REASON**:

```
As a ROLE (user type), I want to GOAL, so that REASON.

Eg: As a user, I want to be able to log in,
    so that I can access my account.
```

You may omit the reason, but only if it is **patently obvious**.

> Be comprehensive! Think wide and far about all the features (phrased as user stories) that you can! You should be making these **while** you are working on your wireframes – the processes feed in to one another.

All user stories should be placed in the **Ice Box** list to start.

### Identify an MVP (i.e., Sprint Planning)

Classify the user stories that are the minimum necessary in order
to make your app work. These are your MVP (minimum viable product). Move these stories to the Sprint list in Trello.

Pick your first three or four fundamental user stories, and
move them to the Current list in Trello. *Sign up and log in are a good place to start.*

Make sure you have user stories for some strech goals in your Icebox. If you finish your MVP before Thursday evening, you don't want to waste time coming up with strech goals then - have them ready and waiting in your Icebox!

**Note:** do not write any user stories from the point of view of the programmer! Keep implementation details separate from user stories.

### ERD

Identify what your models are going to be and what attributes they will have. Don't forget to include a foreign key attribute when necessary!

Also figure out which relationships will be necessary between them for your MVP. Use crows feet notation to show those relationships.

You can use a drawing program if you want, but it's perfectly acceptable (and probably quicker) to draw your ERD on a whiteboard surface or paper and take a picture. Add the ERD to your repo's `assets` folder and/or your Trello board.

*You do not need to include strech goal details in your ERD, but you may if you'd like.*

## Deliverables

1. A *series of wireframes* describing what will be visible to the user who uses your site in your GitHub repo and/or Trello board. DO NOT SKIP THIS!
2. An ERD that shows all models that your application will need and their relationships in your GitHub repo and/or Trello board.
3. All of the user stories, in your project's Trello board. Be sure that your board is set to **public** so that your instructors can access it. Your user stories will flow through the following lists:
 - `Ice Box`
 - `Sprint`
 - `Current`
 - `Done`
4. A GitHub repo with a `readme.md` file which includes:
 - a link to your Trello board
 - a brief description of your project
 - wireframes and ERD (if not in your Trello board)


