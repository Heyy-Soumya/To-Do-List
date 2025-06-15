                                                         Testing Guidance

|  Feature               |    Test Steps                                                |    Expected Result                                                    |
| ---------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------- |
| Add Task               | Type in the input box → click "Add"                          | New task appears in the list                                          |
| Empty Input Alert      | Click "Add" with an empty input field                        | Alert: "Please enter a task"                                          |
| Mark Task Complete     | Click the checkbox next to a task                            | Task gets strike-through; marked as completed                         |
| Delete Task            | Click "Delete" next to a task                                | Task is removed from the list                                         |
| Filter: All            | Click "All" button                                           | Displays all tasks                                                    |
| Filter: Active         | Click "Active" button                                        | Displays only incomplete tasks                                        |
| Filter: Completed      | Click "Completed" button                                     | Displays only completed tasks                                         |
| Sort Tasks A-Z/Z-A     | Click "Sort A-Z" button                                      | Tasks reorder alphabetically in ascending order                       |
| Persistence Check      | Add/complete/delete tasks → refresh page                     | All changes should remain (stored in `localStorage`)                  |
