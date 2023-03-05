#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int main() {

    int n;
    cin >> n;

    vector<int> a;

    while (n--) {
        int c;
        cin >> c;
        a.push_back(c);
    }


    int l = 0;
    int r = 0;

    int max = INT_MIN;

    int l_m, r_m;

    int cur = a[0], in_row = 1;

    while (r < a.size() - 1) {
        r++;

        if (a[r] == cur) {
            in_row++;
        } else {
            in_row = 1;
            cur = a[r];
        }

        if (in_row == 3) {
            l = r - 1;
            in_row = 2;
        }

//        cout << l << " " << r << endl;

        if ((r - l) > max) {
            l_m = l;
            r_m = r;
            max = (r - l);
        }
    }

    cout << (l_m + 1) << " " << (r_m + 1) << endl;

}
