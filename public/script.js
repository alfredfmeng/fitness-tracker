const exercises = [
  {
    id: "exercise-1",
    completed: false,
    duration: 30,
  },
  {
    id: "exercise-2",
    completed: true,
    duration: 45,
  },
  {
    id: "exercise-3",
    completed: true,
    duration: 30,
  },
  {
    id: "exercise-4",
    completed: true,
    duration: 20,
  },
];

const toggleCompleted = (exercise, icon) => {
  if (exercise.completed) {
    icon.classList.remove("fas", "fa-check-circle");
    icon.classList.add("far", "fa-circle");
  } else {
    icon.classList.remove("far", "fa-circle");
    icon.classList.add("fas", "fa-check-circle");
  }
  exercise.completed = !exercise.completed;
};

const updateAnalytics = (allExercises) => {
  const completedExercises = exercises.filter((exercise) => exercise.completed);
  const minutesExercised = completedExercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
  const percentageCompleted =
    (completedExercises.length / allExercises.length) * 100 + "%";
  const totalMinutesElement = document.getElementById("total-minutes");
  const percentageCompletedElement = document.getElementById(
    "percentage-completed"
  );
  totalMinutesElement.textContent = minutesExercised;
  percentageCompletedElement.textContent = percentageCompleted;
};

exercises.forEach((exercise) => {
  const exerciseElement = document.getElementById(exercise.id);
  const icon = exerciseElement.querySelector("i");
  icon.addEventListener("click", () => {
    toggleCompleted(exercise, icon);
    updateAnalytics(exercises);
  });
});
