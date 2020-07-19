
/* 最大子列和问题 */


import java.util.Scanner;

public class Test1 {
    public static void main(String[] args) {
       Scanner in = new Scanner(System.in);
        int N = in.nextInt();
        int[] array = new int[N];
        for (int i = 0; i < N; i++) {
            array[i] = in.nextInt();
        }
        System.out.println(maxSubSeqSum(N, array));
    }
    
    public static int maxSubSeqSum(int N, int[] arr) {
        int  curSum = 0, maxSum = 0;
        for (int i = 0; i < arr.length; i++) {
           curSum += arr[i];
           if (curSum < 0) curSum = 0;
           maxSum = Math.max(curSum, maxSum);
        }
        return maxSum;
    }
}