#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int isHigher(pair<long long, long long> v0, pair<long long, long long> v1) {
   long long prod = v0.first * v1.second - v0.second * v1.first;

   if (prod > 0) {
       return 1;
   }

   if (prod < 0) {
       return -1;
   }

   return 0;
}

int main() {
    int n;

    cin >> n;

    vector<pair<int, int>> a;

    for (int i = 0; i < n; ++i) {
        int v1, v2;

        cin >> v1 >> v2;
        a.emplace_back(v1,v2);
    }

    pair<int, int> dot = a[1];

    int higher, lower;

    for (int i = 0; i < n; ++i) {
        pair<int, int> d2 = a[i];

        if (dot.first == d2.first && dot.second == d2.second) {
            continue;
        }

        auto line = pair<long long, long long>(d2.first - dot.first, d2.second - dot.second);
        higher = lower = 0;

        for (int j = 0; j < n; ++j) {
            auto v = a[j];

            int rs = isHigher(line, {v.first - dot.first, v.second - dot.second});

            if (rs == 1) {
                higher++;
            }
            if (rs == -1) {
                lower++;
            }
        }

        if (higher == lower) {
            cout << 2 << " " << (i + 1) << endl;
            break;
        }
    }

}
