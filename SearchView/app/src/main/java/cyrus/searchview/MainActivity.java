package cyrus.searchview;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.MenuItem;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.arlib.floatingsearchview.FloatingSearchView;
import com.arlib.floatingsearchview.suggestions.model.SearchSuggestion;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

import static cyrus.searchview.R.id.image;

public class MainActivity extends AppCompatActivity {
    // SearchResultsListAdapter mSearchResultsAdapter;
    FloatingSearchView mSearchView;
    public static final long FIND_SUGGESTION_SIMULATED_DELAY = 250;
    private String mLastQuery = "";
    String json_url="http://192.168.137.250:2000/search";
    //String json="{'cast':[{'name':'JeffBridges','rajat','rahul','ram,'rahim,'rohan',ramya','jeniffer','jacky')}";
       // JSONObject jsonObject =null;
  List<Suggestion> temp ;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mSearchView = (FloatingSearchView)findViewById(R.id.floating_search_view);
        setupSearchBar();
    }


    public void setupSearchBar(){

    mSearchView.setOnQueryChangeListener(new FloatingSearchView.OnQueryChangeListener() {
        @Override
        public void onSearchTextChanged(String oldQuery, String newQuery) {
             Toast.makeText(MainActivity.this ,"setOnQueryChangeListener+setonsearchTextChanged" ,Toast.LENGTH_SHORT).show();
            //System.out.println("setOnQueryChangeListener++setonsearchTextChanged");
    /*   if (!oldQuery.equals("") && newQuery.equals("")) {
               mSearchView.clearSuggestions();
            } else {
                mSearchView.showProgress();

                Content.findSuggestions(MainActivity.this, newQuery, 4,
                        FIND_SUGGESTION_SIMULATED_DELAY, new Content.OnFindSuggestionListener() {

                            @Override
                            public void onResults(List<Suggestion> results) {

                                mSearchView.swapSuggestions(results);
                                mSearchView.hideProgress();
                            }
                        });
            }*/
            //perform a network connection an obtain result
         //  {color : [{name: "blue",image: 'kjbdkjsan'},{name: 'brown',image: 'sakbkja'}]}
            // ArrayList<String> arr= new ArrayList<String>();

             // for(int i=0;color.length();i++)
           // {
              //  arr.add(new Suggestion(color[i].name,color[i].image));
             //   arr.add(new Suggestion(color[i]));
           // }
            //mSearchView.swapSuggestions(arr);

            //try {
          /*   JSONObject parent = new JSONObject();
                JSONObject jsonObject = new JSONObject();
                JSONArray jsonArrayone = new JSONArray();
                jsonArrayone.put("pranjal");
                jsonArrayone.put("rahul");
                jsonArrayone.put("ansh");
                jsonArrayone.put("vansh");
               jsonObject.put("name", jsonArrayone);
                parent.put("profile", jsonObject)0;*/
                //Log.d("JSON", parent.toString());
               // String[] arr = new String[jsonArrayone.length()];
              //  ArrayList<String> arr = new ArrayList<String>();
                // ArrayList<Suggestion> arrayList = new ArrayList<Suggestion>();
           temp = new ArrayList<Suggestion>();
                 JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.GET, json_url, null,
                        new Response.Listener<JSONObject>() {
                            @Override
                            public void onResponse(JSONObject response) {
                             //   Log.e("reponse",response.toString());
                               // ArrayList<Suggestion> temp = new ArrayList<>();
                                JSONArray colors=new JSONArray();
                                try {
                                    colors = response.getJSONArray("colors");
                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }

                                // int count=0;
                                    //  while(count<response.length())
                          //
            //                    mSearchView.swapSuggestions(temp);
                                for (int i = 0; i < colors.length(); i++) { //     try {
                           try {

                               temp.add(new Suggestion(colors.getString(i)));
                               }
                          catch (JSONException e)
                                {e.printStackTrace();}

                                }

                                mSearchView.swapSuggestions(temp);

                            }
                        }, new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {

                    }
                });
                RequestQueue requestQueue= Volley.newRequestQueue(MainActivity.this);
                            requestQueue.add(jsonObjectRequest);
              //     ArrayList<Suggestion> arr = new ArrayList<Suggestion>();
              //  for (int i=0;i<jsonArrayone.length();i++)
              //  {
                //    arr.add(jsonArrayone.getString(i));
               //    arr.add(new Suggestion(jsonArrayone.getString(i)));
              //  }
              //  mSearchView.swapSuggestions(temp);
            //}
            // catch (JSONException e) {

              //    e.printStackTrace();
                // Toast.makeText(MainActivity.this, "JSON Exception arised", Toast.LENGTH_SHORT).show();
            //}
        }
    });

    mSearchView.setOnSearchListener(new FloatingSearchView.OnSearchListener() {
        @Override
        public void onSuggestionClicked(SearchSuggestion searchSuggestion) {
            Toast.makeText(MainActivity.this ,"setOnSearchListener+onSuggestionClicked" ,Toast.LENGTH_SHORT).show();
                    Suggestion suggestion =(Suggestion) searchSuggestion;
            String query;
              query = suggestion.getBody();
            if(query.equals("pink"))
            {
                Toast.makeText(MainActivity.this, "pinkylipas", Toast.LENGTH_SHORT).show();
               // In
            }


            //System.out.println("setOnSearchListener+onSuggestionClicked");

        }

        @Override
        public void onSearchAction(String currentQuery) {
            Toast.makeText(MainActivity.this ,"setOnSearchListener+onSearchAction" ,Toast.LENGTH_SHORT).show();
            System.out.println("setOnSearchListener+onSearchAction");

        }
    });

    mSearchView.setOnFocusChangeListener(new FloatingSearchView.OnFocusChangeListener() {
        @Override
        public void onFocus() {
            Toast.makeText(MainActivity.this ,"setOnFocusChangeListener+onFocus" ,Toast.LENGTH_SHORT).show();
            System.out.println("setOnFocusChangeListener+onFocus");
            mSearchView.swapSuggestions(Content.getHistory(MainActivity.this,15));


        }

        @Override
        public void onFocusCleared() {
            Toast.makeText(MainActivity.this ,"setOnFocusChangeListener+onFocusCleared" ,Toast.LENGTH_SHORT).show();
            System.out.println("setOnFocusChangeListener+onFocusCleared");
        }
    });

    mSearchView.setOnMenuItemClickListener(new FloatingSearchView.OnMenuItemClickListener() {
        @Override
        public void onActionMenuItemSelected(MenuItem item) {
            Toast.makeText(MainActivity.this ,"setOnMenuItemClickListener+onActionMenuItemSelected" ,Toast.LENGTH_SHORT).show();
            System.out.println("setOnMenuItemClickListener+onActionMenuItemSelected");
        }
    });

    mSearchView.setOnHomeActionClickListener(new FloatingSearchView.OnHomeActionClickListener() {
        @Override
        public void onHomeClicked() {
            Toast.makeText(MainActivity.this ,"setOnHomeActionClickListener+onHOmeClicked" ,Toast.LENGTH_SHORT).show();
            System.out.println("setOnHomeActionClickListener+onHOmeClicked");
        }
    });
    }
}
