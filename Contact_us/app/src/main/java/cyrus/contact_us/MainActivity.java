package cyrus.contact_us;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    LinearLayout lt1,lt2,lt3,lt4,lt5;
    TextView t1,t2,t3,t4,t5;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        lt1 = (LinearLayout) findViewById(R.id.query);
        lt2 = (LinearLayout) findViewById(R.id.drug);
        lt3 = (LinearLayout) findViewById(R.id.disease);
        lt4 = (LinearLayout) findViewById(R.id.molecule);
        lt5 = (LinearLayout) findViewById(R.id.refer);

        t1 = (TextView) findViewById(R.id.query_text);
        t2 = (TextView) findViewById(R.id.drug_text);
        t3 = (TextView) findViewById(R.id.disease_text);
        t4 = (TextView) findViewById(R.id.molecule_text);
        t5 = (TextView) findViewById(R.id.refer_text);

        lt1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent = new Intent(MainActivity.this, contact_query.class);
                intent.putExtra("query",t1.getText().toString());
                startActivity(intent);

            }
        });

        lt2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent = new Intent(MainActivity.this, contact_query.class);
                intent.putExtra("drug",t2.getText().toString());
                startActivity(intent);

            }
        });

        lt3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent = new Intent(MainActivity.this, contact_query.class);
                intent.putExtra("disease",t3.getText().toString());
                startActivity(intent);

            }
        });


         lt4.setOnClickListener(new View.OnClickListener() {
             @Override
             public void onClick(View view) {

                 Intent intent = new Intent(MainActivity.this, contact_query.class);
                 intent.putExtra("molecule",t4.getText().toString());
                 startActivity(intent);

             }
         });

        lt5.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent = new Intent(MainActivity.this, contact_query.class);
                intent.putExtra("refer",t5.getText().toString());
                startActivity(intent);

            }
        });

    }


}
