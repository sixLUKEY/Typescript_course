interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// Built in Partial type

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// Built in readonly 

const bigNames: Readonly<string[]> = ["Max", "Anna"];
bigNames.push("Mully");
bigNames.pop('Max')
