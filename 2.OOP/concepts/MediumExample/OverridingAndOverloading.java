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
