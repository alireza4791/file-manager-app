public class Main {

    public static void main(String[] args) {
        Shoe s = new Shoe("Adidas", 10);
        System.out.println(s.Brand);
        System.out.println(s.Size);
        Walking r = new Walking(true, null, 0);
        if(r.goreTex)
            System.out.println("True");
        else
            System.out.println("False");
        Runing g = new Runing(false, null, 0);
        if(g.Weight)
            System.out.println("Fat");
        else
            System.out.println("healthy");
    }
}
