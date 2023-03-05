#include <iostream>
#include <bits/stdc++.h>

using namespace std;


int f(int a, int b, int c, int d) {
    int temp = a * b - c;

    if (temp < 0) {
        return 0;
    }

    return min(temp, d);
}

int main() {

    int a, b, c, d;
    long long k;

    cin >> a >> b >> c >> d >> k;

    long ck = 0;
    int ans;
    int res = a;

    while (true) {
        ans = res;
        res = f(res, b, c, d);

        if (res == 0 || res == d || res == ans) {
            break;
        }

        ck++;
        if (ck == k) {
            break;
        }
    }

    cout << res << endl;
}
