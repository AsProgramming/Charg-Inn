package database;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class AppDB extends SQLiteOpenHelper {

    private static AppDB db = null;
    private static final String DBNAME = "charg_inn";
    private static final String TABCLIENT = "client";
    private static final String TABHUB = "charg";
    private static final String ID = "id";
    private static final String CLIENTNANE = "name";
    private static final String CLIENTSEXE = "sexe";
    private static final String CLIENTCITY = "ville";
    private static final String CLIENTEMAIL = "email";
    private static final String CHARGNAME = "borne_name";
    private static final String CHARGLONG = "longitude";
    private static final String CHARGLAT = "latitude";
    private static final String CHARGSPEED = "speed";


    public static AppDB getInstance(Context mContext){
        if(db == null){
            db = new AppDB(mContext.getApplicationContext());
        }
        return db;
    }

    private AppDB(Context mContext){
        super(mContext, DBNAME, null, 1);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        db.execSQL(SQLcreate(true));
        db.execSQL(SQLcreate(false));
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

    }

    private String SQLcreate(boolean client){
        if(client){
            return "create table " + TABCLIENT + "(" + ID + " number primary key, " +
                    CLIENTNANE + " text, " +
                    CLIENTSEXE + " text, " +
                    CLIENTCITY + " text, " +
                    CLIENTEMAIL + " text)";
        }else{
            return "create table " + TABHUB + "(" + ID + " number primary key, " +
                    CHARGNAME + " text, " +
                    CHARGLONG + " real, " +
                    CHARGLAT + " real, " +
                    CHARGSPEED + " text)";
        }
    }
}
