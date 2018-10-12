package infos;

public class Borne {

    private int id;
    private String nom;
    private float longitude;
    private float latitude;
    private int niveau;
    private int nb;
    private String telephone;
    private boolean actif;
    private boolean favori;

    public Borne(){ }

    public Borne(String nom, float longitude, float latitude, int niveau, int nb, String telephone, boolean actif, boolean favori) {
        this.nom = nom;
        this.longitude = longitude;
        this.latitude = latitude;
        this.niveau = niveau;
        this.nb = nb;
        this.telephone = telephone;
        this.actif = actif;
        this.favori = favori;
    }

    public Borne(int Lid, String leNom, int leNiveau){
        id = Lid;
        nom = leNom;
        niveau = leNiveau;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setLongitude(float longitude) {
        this.longitude = longitude;
    }

    public void setLatitude(float latitude) {
        this.latitude = latitude;
    }

    public void setNb(int nb) {
        this.nb = nb;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public void setNiveau(int niveau) {
        this.niveau = niveau;
    }

    public void setActif(int actif) {
        this.actif = actif == 1;

    }

    public void setFavori(int favori) {
        this.favori = favori == 1;
    }

    public String getId() {
        return Integer.toString(id);
    }

    public String getNom() {
        return nom;
    }

    public float getLongitude() {
        return longitude;
    }

    public float getLatitude() {
        return latitude;
    }

    public int getNb() {
        return nb;
    }

    public String getTelephone() {
        return telephone;
    }

    public int getNiveau() {
        return niveau;
    }

    public boolean isActif() {
        return actif;
    }

    public boolean isFavori() {
        return favori;
    }

    public int getActif() {
        if(actif){
            return 1;
        }else{
            return 0;
        }
    }

    public int getFavori() {
        if(favori){
            return 1;
        }else{
            return 0;
        }
    }
}
