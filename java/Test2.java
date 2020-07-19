import java.util.Scanner;

public class Test2 {
     public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int N = in.nextInt();
         
        int[] arr = new int[N];
        int curSum =  0, maxSum = -1, start = 0, end = 0, temp = 0;
         
        for (int i = 0; i < N; i++) {
            arr[i] = in.nextInt();
            curSum += arr[i];
            if (maxSum < curSum) {
                maxSum = curSum;
                start = temp;
                end = i;
            }
            if (curSum < 0) {
                curSum = 0;
                temp = i + 1;
            } 
        }
        String str = "";
        if (maxSum < 0) {
            str = "0 " + arr[0] + " " + arr[N - 1];
        } else {
            str = maxSum + " " + arr[start] + " " + arr[end];
        }
         System.out.println(str);
       
        
    }
}