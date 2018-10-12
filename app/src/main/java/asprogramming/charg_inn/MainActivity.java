package asprogramming.charg_inn;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import java.util.ArrayList;

import database.AppDB;
import infos.Borne;
import infos.Client;

public class MainActivity extends AppCompatActivity {

    private AppDB db;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        db = AppDB.getInstance(this);
/*
        Client test = new Client("email", "password", "nom", 100, 80, 2);
        Borne borne = new Borne("nom", 15.5f, 15.5f, 3, 4, "5148225656", true, true);

        db.ajouterClient(test);
        db.ajouterBorne(borne);
*/
        ArrayList<Borne> lst2 = db.getBornes();
        ArrayList<Client> lst = db.getClients();
        ArrayList<Borne> lst5 = db.getFavoris(lst.get(0));
       // db.ajouterFavoris(lst.get(0), lst2.get(0));
        lst.get(0);
    }
}
