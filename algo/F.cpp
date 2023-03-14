#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int main() {
    string v;
    vector<string> a;

    while (cin >> v) {
        a.push_back(v);
    }

    sort(a.begin(), a.end(), [](string const &a, string const &b) {

            string a_b = a + b;
            string b_a = b + a;

            return a_b < b_a;
         }
    );

    for (int i = a.size() - 1; i >= 0; --i) {
        cout << a[i];
    }
    cout << endl;

}
