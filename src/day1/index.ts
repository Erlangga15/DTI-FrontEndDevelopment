import { areaOfRectangle, Rectangle } from "./area-of-rectangle";
import { circumferenceOfCircle, areaOfCircle, Circle } from "./circumference-area-of-circle";
import { anglesOfTriangle, TriangleAngles } from "./angles-of-triangle";
import { differenceBetweenDatesInDays, DateDifference } from "./difference-between-dates-in-days";
import { nameInitialInUppercase, Name } from "./name-initial-in-uppercase";

const getUserInput = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    process.stdout.write(question + ' ');
    process.stdin.once('data', (data) => {
      resolve(data.toString().trim());
    });
  });
}

export const runExercise1 = async () => {
  try {
		while (true) {
			console.log('----------------------------------');
			console.log("Exercise 1");
			console.log("Choose the program you want to run:");
			console.log("1. Calculate the area of a rectangle");
			console.log("2. Calculate the circumference and area of a circle");
			console.log("3. Calculate the angles of a triangle");
			console.log("4. Calculate the difference between two dates in days");
			console.log("5. Calculate the name initial in uppercase");

			const choice = parseInt(await getUserInput("Enter the number of the program you want to run:")) || 0;

			switch (choice) {
				case 1:
					const length = parseFloat(await getUserInput("Enter the length:")) || 0;
					const width = parseFloat(await getUserInput("Enter the width:")) || 0;
					const areaRectangle = areaOfRectangle({ length, width } as Rectangle);
					console.log(`The area of the rectangle is: ${areaRectangle}`);
					console.log('----------------------------------');
					break;
				case 2:
					const radius = parseFloat(await getUserInput("Enter the radius:")) || 0;
					const circumference = circumferenceOfCircle({ radius } as Circle);
					const areaCircle = areaOfCircle({ radius } as Circle);
					console.log(`The circumference of the circle is: ${circumference}`);
					console.log(`The area of the circle is: ${areaCircle}`);
					console.log('----------------------------------');
					break;
				case 3:
					const a = parseFloat(await getUserInput("Enter the first angle:")) || 0;
					const b = parseFloat(await getUserInput("Enter the second angle:")) || 0;
					const angle = anglesOfTriangle({ angle1: a, angle2: b } as TriangleAngles);
					console.log(`The third angle of the triangle is: ${angle}`);
					console.log('----------------------------------');
					break;
				case 4:
					const date1String = await getUserInput("Enter the first date (YYYY-MM-DD):") || "";
					const date2String = await getUserInput("Enter the second date (YYYY-MM-DD):") || "";
					const date1 = new Date(Date.parse(date1String));
					const date2 = new Date(Date.parse(date2String));
					if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
						console.log("Invalid date. Please enter dates in the format YYYY-MM-DD.");
						return;
					}
					const difference = differenceBetweenDatesInDays({ date1, date2 } as DateDifference);
					console.log(`The difference between the two dates is: ${difference} days`);
					console.log('----------------------------------');
					break;
				case 5:
					const name = await getUserInput("Enter the name:") || "";
					const initial = nameInitialInUppercase({ name } as Name);
					console.log(`The initial of the name is: ${initial}`);
					console.log('----------------------------------');
					break;
				default:
					console.log("Invalid choice. Please try again.");
					break;
			}
		}
  } catch (error) {
    console.error("error", error);
  } finally {
    process.stdin.pause();
  }
};
