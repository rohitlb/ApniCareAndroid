package cyrus.searchview;

import android.os.Parcel;
import android.os.Parcelable;

/**
 * Created by cyrus on 9/30/2017.
 */



//import com.google.gson.annotations.Expose;
//import com.google.gson.annotations.SerializedName;

    public class ColorWrapper {



        public static final Parcelable.Creator<ColorWrapper> CREATOR = new Parcelable.Creator<ColorWrapper>() {
            @Override
            public ColorWrapper createFromParcel(Parcel in) {
                return new ColorWrapper();
            }

            @Override
            public ColorWrapper[] newArray(int size) {
                return new ColorWrapper[size];
            }
        };

    }
