package cyrus.contact_us;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

public class contact_query extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_contact_query);

        TextView t1 = (TextView) findViewById(R.id.text);

        Intent intents = getIntent();

        String str1 = intents.getStringExtra("query");
        String str2 = intents.getStringExtra("drug");
        String str3 = intents.getStringExtra("disease");
        String str4 = intents.getStringExtra("molecule");
        String str5 = intents.getStringExtra("refer");

        if(str1.length()!=0 ) {
            t1.setText(str1);
        }
        if(str2!=null ) {
            t1.setText(str2);
        }
        if(str3!=null ) {
            t1.setText(str3);
        }
        if(str4!=null ) {
            t1.setText(str4);
        }
        if(str5!=null ) {
            t1.setText(str5);
        }
    }

}
