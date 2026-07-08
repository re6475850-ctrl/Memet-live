package com.memetlive.app;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // 'START LIVE' button ko dhoondna
        Button btnLive = findViewById(R.id.btn_live);

        // Click Listener jodna
        btnLive.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Live Streaming Activity par jaane ka active code
                Intent intent = new Intent(MainActivity.this, LiveStreamingActivity.class);
                startActivity(intent);
            }
        });
    }
}

