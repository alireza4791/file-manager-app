import java.util.Scanner;
public class Main {


    public static void main(String[] args)
    {
        Scanner sc=new Scanner(System.in);
        Home a = new Home("Kermanshah",150,200,1000000000);
        Buyer b = new Buyer("Nahid Maleki Vafa",981140023,3000000);
        System.out.println("Name, id and profit : ");
        Seller c = new Seller(sc.next(),sc.nextInt(),sc.nextDouble());
        System.out.println("Masters Name : ");
        Master d = new Master(sc.next(), 12345678, false);
        System.out.println("Enter the date : ");
        Deal e = new Deal(sc.next());
        Weather f = new Weather("Sunny");
        System.out.println("************WELCOME**************");



        System.out.println("Home Info:");
        System.out.println("Home address:" + a.address);
        System.out.println("Home height:" + a.height);
        System.out.println("Home width:" + a.width);
        System.out.println("Home cost:" + a.cost);




        System.out.println("Buyer Info:");
        System.out.println("Name:" + b.name);
        System.out.println("Buyer ID:" + b.id);
        System.out.println("Salary:" + b.Salary);




        System.out.println("Seller Info:");
        System.out.println("name:" + c.name);
        System.out.println("id : :" + c.id);
        System.out.println("Profit:" + c.Profit);



        System.out.println("Master Info:");
        System.out.println("Name:" + d.name);
        System.out.println("id :" + d.id);
        System.out.println("Sign:" + d.sign);



        System.out.println("Deal Info:");
        System.out.println("Date:" + e.Date);


        System.out.println("Weather Info:");
        System.out.println("Weather Status: " + f.Weatherstatus);
    }

}
