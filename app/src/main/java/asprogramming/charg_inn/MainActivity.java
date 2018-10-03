package asprogramming.charg_inn;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import database.AppDB;

public class MainActivity extends AppCompatActivity {

    private AppDB db;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        db = AppDB.getInstance(this);


    }
}
