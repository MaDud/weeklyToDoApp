# WeekToDo Application

This application was inspired by the Alistair Method which can be used for future log in bullet journal.
It allows to plan and monitor tasks in week period.

[Read more about Alistair Method](https://bulletjournal.com/blogs/bulletjournalist/to-do-the-alastair-method) 

## General Info

Do you have a lot of tasks on your head and you feel confused about that? Don't you know how to start organize your tasks step by step? This application can be answer to your problems. In one place you will be able to add tasks and monitore their status. You only need to have access to internet to start.

This application is demo without authorization so everything is visible for public. 
Check demo

## Technologies

- JavaScript ES6
- SCSS
- React (class component based) 
- Redux 
- Redux Saga
- Dayjs
- Firestore 

## Features of WeekToDo Application

- Week navigation to access to previous and future weeks.
- Information about current displayed week if it is not same as current calendar week.
- Tasks' list.
- Sort tasks.
- Add new task to week.
- Add or change task's status.
- Legend for tasks status.

### Week navigation

There are two versions of week navigation - one for desktop and second for mobile.

On desktop navigation there are buttons to change displayed week and information about current displayed week number and data period for this week.

On mobile there are two extra buttons to change displayed day and instead of data period for week there is only day name. You can change displayed day and also displayed week.

### Information about current displayed week/day

Thanks to top header you always know if you see current calendar week or day. If there is nothing more than logo on top it means your view correspond. If current view isn't same as current calendar week then there will be a circle icon on header. For mobile you also will see if current day is not same as current calendar day - there will be a half empty circle.
To see current calendar day/week - just click on this circle.

### Tasks' list & sorting

Tasks' list on desktop is a table with columns for every week day (starting from Monday) and one column for tasks. On mobile there only be two columns - one for current displayed day and second for tasks.

If there is no tasks on list for current displayed day you will see information about that.

To sort tasks just click on sort button in choosen table header. Sort icon changes according to selected table column header.

### Add new task to week

To add new task you should click on button Add task. On desktop it is below week navigation and tasks' list (text if there isn't tasks). On mobile button is fixed to bottom of mobile desktop.
After click there will be form to add new task. Task will be added to current displayed week.

### Add or change task's status

To add/change task status you need to click on table cell as many times as you will see status icon you want to set. 
There are seven different status (connection between status and icon described in below in Legend for tasks status):
- none (nothing in cell);
- planned;
- in progress;
- finished;
- moved to next day;
- moved to next week;
- canceled.

Task status is saved in database basing on timer - after 800 milliseconds wihout changing status after last click.

#### Tasks' status rules

There is no special rules for statuses: none, planned.

For statuses: in progress, moved to next day there is only one rule. When this status is set to last day of week (Sunday) task will be copied to next week.

When you set status 'moved to next week' then task will be copied to next week. Statuses for days after day with this status in current week will be cleared and there won't be possibility to set then status. You will be able to add status in next week.

When you set status 'planned' or 'canceled' then statuses for days after will be cleared and there won't be possibility to set then status. (if previous task's status was 'moved to next week' - task will be removed from next week tasks' list).

### Legend for tasks status

Legend is available on desktop as icon on right side of page. Schema: click to show, click to hide.
On mobile it is available below tasks' list.

Every status has it own icon as it is showed below







