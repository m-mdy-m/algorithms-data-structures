package com.journaldev.examples;

import java.util.Arrays;

public class Processor {

	public void process(int i, int j) {
		System.out.printf("Processing two integers:%d, %d", i, j);
	}

	public void process(int[] ints) {
		System.out.println("Adding integer array:" + Arrays.toString(ints));
	}

	public void process(Object[] objs) {
		System.out.println("Adding integer array:" + Arrays.toString(objs));
	}
}

class MathProcessor extends Processor {

	@Override
	public void process(int i, int j) {
		System.out.println("Sum of integers is " + (i + j));
	}

	@Override
	public void process(int[] ints) {
		int sum = 0;
		for (int i : ints) {
			sum += i;
		}
		System.out.println("Sum of integer array elements is " + sum);
	}

}
/**
 * In the provided example, both overriding and overloading are demonstrated within the `Processor` and `MathProcessor` classes.
 * !Overriding:
 * In the `MathProcessor` class, the `process(int i, int j)` method is overridden from its superclass `Processor`. This means that the `process` method in the `MathProcessor` class provides a specific implementation for the method inherited from `Processor`. 
 **@Override
 * *public void process(int i, int j) {
 * *System.out.println("Sum of integers is " + (i + j));
 * *}
 *  When the `process` method with two integer parameters is called on an instance of `MathProcessor`, this overridden version of the method will be executed, which calculates and prints the sum of the two integers.
 * !Overloading:
 *  In the `Processor` class, there are multiple `process` methods with the same name but different parameter lists. This is method overloading.
 * 
 * 
 * *public void process(int i, int j) { ... }
 * *public void process(int[] ints) { ... }
 * *public void process(Object[] objs) { ... }
 *   These methods have the same name `process`, but they accept different parameters:
 *  - The first `process` method accepts two integer parameters.
 *  - The second `process` method accepts an array of integers.
 *  - The third `process` method accepts an array of objects.
 *  This allows for flexibility in how the `process` method can be called. Depending on the parameters provided, the appropriate overloaded method will be invoked. 
 *  In summary:
 *  - **Overriding** is when a subclass provides a specific implementation for a method that is already defined in its superclass.
 *  - **Overloading** is when multiple methods with the same name but different parameters exist within the same class.
 *  These concepts are fundamental in Java and are used to achieve polymorphism and code reuse.
 */
