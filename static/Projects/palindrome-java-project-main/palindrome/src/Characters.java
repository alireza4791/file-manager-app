public class Characters {


    public static void main(String[] args) {

        char c;

        for(c = 'a'; c <= 'z'; ++c) {

            for(int i = 1; i <= 26; i++)
            {
                if (i % 2 == 0)
                {
                    ++c;
                    break;

                }
                System.out.print(c + " ");

            }

        }
    }
}
