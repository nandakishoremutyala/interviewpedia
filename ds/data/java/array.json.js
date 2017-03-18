var array_que = [
	{
		question : "Array Square Sorter",
		tags : ["array", "square", "sorter"]
	},
	{
		question : "Find Duplicates",
		tags : ["Find", "Duplicates", "Array"]
	},
	{
		question : "Find subarray with given sum",
		tags : ["Find", "Subarray", "Sum", "Array"]
	},
	{
		question : "Matrix set row column zero",
		tags : ["Matrix", "Zero", "0"]
	},
	{
		question : "Max contiguous subarray finder",
		tags : ["Maximum", "Subarray", "Kadane"]
	},
	{
		question : "Max contiguous subarray printer",
		tags : ["Maximum", "Subarray", "Kadane", "Array"]
	},
	{
		question : "Passing car pair counter",
		tags : ["Passing", "Car", "Pair", "Array"]
	},
	{
		question : "Permutation printer",
		tags : ["Array", "Permutation"]
	},
	{
		question : "Print all subarrays",
		tags : ["Print", "All", "Subarray", "Array"]
	},
	{
		question : "Sum of all sub sequences",
		tags : ["Sum", "Subsequence", "Array"]
	},
	
]

var array_ans = [
    	{	/* Array Square Sorter */
		"text" : function(){/*
		
<p>Sort array after converting elements to their squares</p>
<p>Given an array of both positive and negative integers &lsquo;arr[]&rsquo; which are sorted.</p>
<p>Task is to sort square of the numbers of the Array.</p>
<p>&nbsp;</p>
<p>Examples:</p>
<p>Input : arr[] = {-6, -3, -1, 2, 4, 5}</p>
<p>Output : 1, 4, 9, 16, 25, 36</p>
<p>&nbsp;</p>
<p>Input : arr[] = {-5, -4, -2, 0, 1}</p>
<p>Output : 0, 1, 4, 16, 25</p>
<p>&nbsp;</p>
<p>This solution is based on the fact that given array is already sorted. We do following two steps.</p>
<p>1. Divide the array into two part "Negative and positive".</p>
<p>2. Use merge function to merge two sorted arrays into a single sorted array.</p>
<p>&nbsp;</p>
<pre>
package com.interviewpedia.array.puzzles;
 
public class ArraySquareSorter {

    public static void main(String[] args) {
        int arr[] = {-6, -3, -1, 2, 4, 5, 7, 8};

        System.out.println("Before Sorting:");
        for (int element : arr) {
            System.out.print(element + " ");
        }
        System.out.println();

        int sortedArr[] = ArraySquareSorter.sort(arr);

        System.out.println("After Sorting:");
        for (int element : sortedArr) {
            System.out.print(element + " ");
        }
    }

    private static int[] sort(int arr[]) {
        int k = 0;
        for (; k < arr.length; k++) {
            if (arr[k] > 0) {
                break;
            }
        }

        int i = k - 1;
        int j = k;
        int sortedArr[] = new int[arr.length];
        int idx = 0;
        for (; i >= 0 && j < arr.length; idx++) {
            int a = arr[i] * arr[i];
            int b = arr[j] * arr[j];

            if (a < b) {
                sortedArr[idx] = a;
                i--;
            } else {
                sortedArr[idx] = b;
                j++;
            }

        }

        for (; i >= 0; i--, idx++) {
            sortedArr[idx] = arr[i] * arr[i];
        }

        for (; j < arr.length; j++, idx++) {
            sortedArr[idx] = arr[j] * arr[j];
        }

        return sortedArr;
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* Find Duplicates */
		"text" : function(){/*
<p><br />Find duplicates in O(n) time and O(1) extra space</p>
<p>Given an array of n positive numbers with any of these numbers appearing any number of times.<br />Find these repeating numbers in O(n) and using only constant memory space.<br />For example, let n be 7 and array be {1, 2, 3, 1, 3, 6, 6}, the answer should be 1, 3 and 6.<br /><br /></p>
		<pre>
package com.interviewpedia.array.puzzles;

public class FindDuplicates {

    private static void printRepeating(int arr[]) {
        System.out.println("The repeating elements are : ");
        for (int i = 0; i < arr.length; i++) {
            int unsigned = Math.abs(arr[i]);
            if (arr[unsigned] >= 0)
                arr[unsigned] = -arr[unsigned];
            else
                System.out.print(Math.abs(arr[i]) + " ");
        }
    }

    public static void main(String[] args) {
        int arr[] = {4, 2, 4, 5, 2, 3, 1};
        printRepeating(arr);
    }
}	</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* Find subarray with given sum */
		"text" : function(){/*
<p>Find subarray with given sum<br /><br />Given an unsorted array of nonnegative integers, find a continous subarray which adds to a given number.<br /><br />Examples:<br /><br />Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33<br />Ouptut: Sum found between indexes 2 and 4<br /><br />Input: arr[] = {1, 4, 0, 0, 3, 10, 5}, sum = 7<br />Ouptut: Sum found between indexes 1 and 4<br /><br />Input: arr[] = {1, 4}, sum = 0<br />Output: No subarray found<br />There may be more than one subarrays with sum as the given sum. The following solutions print first such subarray.<br /><br />Time complexity of method 2 looks more than O(n), but if we take a closer look at the program, then we can figure out the time complexity is O(n).<br />We can prove it by counting the number of operations performed on every element of arr[] in worst case.<br />There are at most 2 operations performed on every element: (a) the element is added to the curr_sum (b) the element is subtracted from curr_sum.<br />So the upper bound on number of operations is 2n which is O(n).<br /><br /></p>
<pre>
package com.interviewpedia.array.puzzles;

public class FindSubArrayWithGivenSum {

    private static void subArraySum(int arr[], int sum) {
        int currentSum = arr[0], startIdx = 0;

        // Pick a starting point
        for (int i = 1; i <= arr.length; i++) {
            // If curr_sum exceeds the sum, then remove the starting elements
            while (currentSum > sum && startIdx < i - 1) {
                currentSum -= arr[startIdx++];
            }

            // If curr_sum becomes equal to sum, then return true
            if (currentSum == sum) {
                int endIdx = i - 1;
                System.out.println("Sum found between indexes " + startIdx + " and " + endIdx);
                return;
            }

            // Add this element to curr_sum
            if (i < arr.length) {
                currentSum = currentSum + arr[i];
            }
        }

        System.out.println("No subarray found");
    }

    public static void main(String[] args) {
        int arr[] = {15, 2, 4, 8, 9, 5, 10, 23};
        int n = arr.length;
        int sum = 23;
        subArraySum(arr, sum);
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* Matrix set row column zero */
		"text" : function(){/*
<p>Write an algo such that if an element in an M*N matrix is 0, its entire row and column are set to 0</p>
<pre>
package com.interviewpedia.array.puzzles;

public class MatrixSetRowColumnZero {

    private static void setZero(int[][] matrix) {
        boolean[] row = new boolean[matrix.length];
        boolean[] column = new boolean[matrix[0].length];

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] == 0) {
                    row[i] = true;
                    column[j] = true;
                }
            }
        }

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                if (row[i] || column[j]) {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    private static void print(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int[][] matrix = {
                {1, 2, 3},
                {4, 0, 6}
        };

        System.out.println("ORIGINAL:");
        print(matrix);
        setZero(matrix);
        System.out.println("MODIFIED:");
        print(matrix);
    }
}
</pre>		
		*/}.toString().slice(14,-3)
	},
	{
		/* Max contiguous subarray finder */
		"text" : function(){/*
<p><a href="https://en.wikipedia.org/wiki/Maximum_subarray_problem" target="_blank">https://en.wikipedia.org/wiki/Maximum_subarray_problem</a></p>
<p>Can be solved using Kadane's algo in O(n)</p>
<pre>
package com.interviewpedia.array.puzzles;

public class MaxContiguousSubArrayFinder {

    // Implementation for Kadane's algo
    // Fails when all numbers in array are negative
    private static int maxSubArraySum(int arr[]) {
        int maxSoFar = 0;
        int maxEndingHere = 0;

        for (int element : arr) {
            maxEndingHere += element;

            if (maxEndingHere < 0) {
                maxEndingHere = 0;

            } else if (maxSoFar < maxEndingHere) {
                maxSoFar = maxEndingHere;
            }
        }
        return maxSoFar;
    }

    // The implementation handles the case when all numbers in array are negative.
    private static int maxSubArraySum1(int arr[]) {
        if(arr.length == 0) {
            return 0;
        }

        int max_so_far = arr[0];
        int curr_max = arr[0];

        for (int i = 1; i < arr.length; i++) {
            curr_max = Math.max(arr[i], curr_max + arr[i]);
            max_so_far = Math.max(max_so_far, curr_max);
        }
        return max_so_far;
    }

    public static void main(String[] args) {
//        int[] arr = {-2, -3, 4, -1, -2, 1, 5, -3};
//        int[] arr = {-2, -3, 4, -4};
        int[] arr = {-2, -3, -4, -1, -2, -1, -5, -3};
        int sum = maxSubArraySum1(arr);
        System.out.println(sum);
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* Max contiguous subarray printer */
		"text" : function(){/*
		
<pre>
package com.interviewpedia.array.puzzles;

public class MaxContiguousSubArrayPrinter {

    //    Fails when all numbers in array are negative
    private static void printMaxSubArray(int arr[]) {
        int maxSoFar = 0;
        int maxEndingHere = 0;

        int startIdx = 0;
        int endIdx = 0;
        int s = 0;

        for (int i = 0; i < arr.length; i++) {
            maxEndingHere += arr[i];

            if (maxEndingHere < 0) {
                maxEndingHere = 0;
                s = i + 1;

            } else if (maxSoFar < maxEndingHere) {
                maxSoFar = maxEndingHere;
                startIdx = s;
                endIdx = i;
            }
        }

        for (int i = startIdx; i <= endIdx; i++) {
            System.out.print(arr[i] + " ");
        }
    }

    public static void main(String[] args) {
        int[] arr = {-2, -3, 4, -1, -2, 1, 5, -3};
//        int[] arr = {-2, -3, 4, -4};
//        int[] arr = {-2, -3, -4, -1, -2, -1, -5, -3};
        printMaxSubArray(arr);
    }

}

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* Passing car pair counter */
		"text" : function(){/*
<p>A non-empty zero-indexed array A consisting of N integers is given.<br />The consecutive elements of array A represent consecutive cars on a road.<br /><br />Array A contains only 0s and/or 1s:<br /><br />0 represents a car traveling east,<br />1 represents a car traveling west.<br />The goal is to count passing cars. We say that a pair of cars (P, Q),<br />where 0 &le; P &lt; Q &lt; N, is passing when P is traveling to the east and Q is traveling to the west.<br /><br />For example, consider array A such that:<br /><br />A[0] = 0<br />A[1] = 1<br />A[2] = 0<br />A[3] = 1<br />A[4] = 1<br />We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).<br /><br />Write a function, such that, given a non-empty zero-indexed array A of N integers, returns the number of passing cars.</p>
<p>The function should return &minus;1 if the number of passing cars exceeds 1,000,000,000.<br /><br />For example, given:<br /><br />A[0] = 0<br />A[1] = 1<br />A[2] = 0<br />A[3] = 1<br />A[4] = 1</p>
<p><br />the function should return 5, as explained above.<br /><br />Assume that:<br />N is an integer within the range [1..100,000];<br />each element of array A is an integer that can have one of the following values: 0, 1.<br /><br /></p>
<pre>
package com.interviewpedia.array.puzzles;

public class PassingCarPairCounter {

    private static int countPairs(int[] A) {
        int countOfZeros = 0, pairCount = 0;

        for (int i = 0; i < A.length; i++) {
            if (pairCount > 1000000000) {
                return -1;
            }

            // keep track of counts of 0s.
            if (A[i] == 0) {
                countOfZeros++;

                //Whenever we see a 1, we increment the pairCount by count of 0s.
            } else if (A[i] == 1) {
                pairCount += countOfZeros;
            }
        }
        return pairCount;
    }

    public static void main(String[] args) {
        int arr[] = {0, 1, 0, 1, 1};
        int pairCount = countPairs(arr);
        System.out.println(pairCount);
    }
}
</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* Permutation printer */
		"text" : function(){/*
<p>A permutation where each element indicates either number of elements before or after it.</p>
<p>Given an array of n elements. The task is to check whether a permutation of given array exists, such that each element indicate number of element present before or after it. Print &ldquo;Yes&rdquo; if exists, else print &ldquo;No&rdquo;.</p>
<p>Examples:</p>
<p>Input : arr[] = {1, 3, 3, 2}<br />Output : Yes</p>
<p><br />{3, 1, 2, 3} is a permutation in which each element&nbsp;indicate number of element present before or after it.&nbsp;There is one more permutation {3, 2, 1, 3}<br /><br />Input : arr[] = {4, 1, 2, 3, 0}<br />Output : Yes</p>
<p><br />There are two permutations {0, 1, 2, 3, 4} or&nbsp;{4, 3, 2, 1, 0}</p>
<p>Observe, for each index i in the array, arr[i] can have value i or (length &ndash; i)</p>
<pre>
package com.interviewpedia.array.puzzles;

import java.util.HashMap;
import java.util.Map;

public class PermutationPrinter {

    private static boolean permutationExists(int arr[]) {
        Map<Integer, Integer> frequency = new HashMap<Integer, Integer>();

        // traverse the given array and find the frequency of each element present in the array
        for (int element : arr) {
            if (frequency.containsKey(element)) {
                frequency.put(element, frequency.get(element) + 1);
            } else {
                frequency.put(element, 1);
            }
        }

        // In a valid permutation, an item with value i can either go to index i or length-i
        // For each index i, check availability of value i and length-i and decrement the respective frequency
        for (int i = 0; i < arr.length; i++) {

            if (frequency.containsKey(i)) {
                int element = i;
                int count = frequency.get(element);
                frequency.put(element, count - 1);

            } else if (frequency.containsKey(arr.length - 1)) {
                int element = arr.length - 1;
                int count = frequency.get(element);
                frequency.put(element, count - 1);

            } else {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        int arr[] = {1, 4, 3, 3, 2};

        if (permutationExists(arr)) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
}

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* Print all subarrays */
		"text" : function(){/*
<p>Consider the array [1, 2, 3, 4], There are 10 non-empty sub-arrays.<br />The subbarays are (1), (2), (3), (4), (1,2), (2,3), (3,4), (1,2,3), (2,3,4) and (1,2,3,4).<br />In general, for an array/string of size n, there are n*(n+1)/2 non-empty subarrays/subsrings.</p>
<p>Time Complexity - O(n^3) - this can be improved by using bitwise op</p>
<pre>
package com.interviewpedia.array.puzzles;

public class PrintAllSubArrays {

    // Prints all subarrays in arr[0..n-1]
    private static void printSubArray(int arr[]) {
        // Pick starting point
        for (int i = 0; i < arr.length; i++) {
            // Pick ending point
            for (int j = i; j < arr.length; j++) {
                // Print subarray between current starting
                // and ending points
                for (int k = i; k <= j; k++) {
                    System.out.print(arr[k] + " ");
                }
                System.out.println();
            }
        }
    }

    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5};
        printSubArray(arr);
    }
}

</pre>
		*/}.toString().slice(14,-3)
	},
	{
		/* Sum of all sub sequences */
		"text" : function(){/*
<pre>
package com.interviewpedia.array.puzzles;

public class SumOfAllSubSequences {

    // Return sum of sum of all sub-sequence.
    private static int sum(int arr[]) {
        double ans = 0;

        // Finding sum of the array.
        for (int i = 0; i < arr.length; i++)
            ans += arr[i];

        return ((Double) (ans * Math.pow(2, arr.length - 1))).intValue();
    }

    public static void main(String[] args) {
        int arr[] = { 6, 7, 8 };
        int sum = sum(arr);
        System.out.println(sum);
    }
}

</pre>
		*/}.toString().slice(14,-3)
	},
	
]