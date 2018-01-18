package cyrus.searchview;

import android.content.Context;
import android.widget.Filter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Content {


    public static List<Suggestion> sColorSuggestions =
            new ArrayList<>();/*(Arrays.asList(
                    new Suggestion("green"),
                    new Suggestion("blue"),
                    new Suggestion("pink"),
                    new Suggestion("purple"),
                    new Suggestion("brown"),
                    new Suggestion("gray"),
                    new Suggestion("Granny Smith Apple"),
                    new Suggestion("Indigo"),
                    new Suggestion("Periwinkle"),
                    new Suggestion("Mahogany"),
                    new Suggestion("Maize"),
                    new Suggestion("Mahogany"),
                    new Suggestion("Outer Space"),
                    new Suggestion("Melon"),
                    new Suggestion("Yellow"),
                    new Suggestion("Orange"),
                    new Suggestion("rajat"),
                    new Suggestion("Orchid")));
*/
public interface OnFindSuggestionListener{
    void onResults(List<Suggestion> results);
}
    public static List<Suggestion> getHistory(Context context, int count) {

        List<Suggestion> suggestionList = new ArrayList<>();
       Suggestion colorSuggestion;
       for (int i = 0; i < sColorSuggestions.size(); i++) {
            colorSuggestion = sColorSuggestions.get(i);
            colorSuggestion.setIsHistory(true);
            suggestionList.add(colorSuggestion);
            if (suggestionList.size() == count) {
                break;
           }
      }
        return suggestionList;
   }

    public static void resetSuggestionsHistory() {
        for (Suggestion colorSuggestion : sColorSuggestions) {
            colorSuggestion.setIsHistory(false);
        }
    }

    public static void findSuggestions(Context context, String query, final int limit, final long simulatedDelay,
                                       final OnFindSuggestionListener listener){
        new Filter() {
            @Override
            protected FilterResults performFiltering(CharSequence constraint) {

              /* try {
                   Thread.sleep(simulatedDelay);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
*/
                Content.resetSuggestionsHistory();
                List<Suggestion> suggestionList = new ArrayList<>();
                if (!(constraint == null || constraint.length() == 0)) {

                    for (Suggestion suggestion : sColorSuggestions) {
                        if (suggestion.getBody().toUpperCase()
                                .startsWith(constraint.toString().toUpperCase())) {

                            suggestionList.add(suggestion);
                            if (limit != -1 && suggestionList.size() == limit) {
                                break;
                            }
                        }
                    }
                }

                FilterResults results = new FilterResults();
                Collections.sort(suggestionList, new Comparator<Suggestion>() {
                    @Override
                    public int compare(Suggestion lhs, Suggestion rhs) {
                        return lhs.getIsHistory() ? -1 : 0;
                    }
                });
                results.values = suggestionList;
                results.count = suggestionList.size();

                return results;
            }

            @Override
            protected void publishResults(CharSequence constraint, FilterResults results) {

                if (listener != null) {
                    listener.onResults((List<Suggestion>) results.values);
                }
            }
        }.filter(query);
        }

    }




