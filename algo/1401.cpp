#include <iostream>
#include <bits/stdc++.h>

using namespace std;

vector<vector<int>> a;
int d = 1;

void fill(int type, int x, int y, int n) {
    if (n == 1) {
        switch (type) {
            case 1:
                a[x][y] = a[x + 1][y] = a[x][y+1] = d++;
                break;
            case 4:
                a[x][y] = a[x + 1][y] = a[x + 1][y+1] = d++;
                break;
            case 3:
                a[x][y + 1] = a[x + 1][y] = a[x + 1][y+1] = d++;
                break;
            case 2:
                a[x][y] = a[x][y + 1] = a[x + 1][y+1] = d++;
                break;
        }

//        for (int i = 0; i < a.size(); ++i) {
//            for (int j = 0; j < a[i].size(); ++j) {
//                cout << a[i][j] << " ";
//            }
//            cout << endl;
//        }
//        cout << endl;
        return;
    }

    switch (type) {
        case 1:
            fill(1,x,y,n-1);
            fill(1,x + pow(2,n-2), y + pow(2, n-2), n-1);
            fill(2,x, y + pow(2, n-1), n-1);
            fill(4, x + pow(2, n-1), y, n-1);
            break;
        case 2:
            fill(1,x,y,n-1);
            fill(2,x + pow(2,n-2), y + pow(2, n-2), n-1);
            fill(3,x + pow(2, n-1), y + pow(2, n-1), n-1);
            fill(2, x, y + pow(2, n-1), n-1);
            break;
        case 3:
            fill(4,x+ pow(2, n-1), y, n-1);
            fill(3,x + pow(2,n-2), y + pow(2, n-2), n-1);
            fill(3,x + pow(2, n-1), y + pow(2, n-1), n-1);
            fill(2, x, y + pow(2, n-1), n-1);
            break;
        case 4:
            fill(4,x + pow(2, n-1), y, n-1);
            fill(4,x + pow(2,n-2), y + pow(2, n-2), n-1);
            fill(3,x + pow(2, n-1), y + pow(2, n-1), n-1);
            fill(1,x,y,n-1);
            break;
    }
}


void fillSq(int x, int y, int n, int badX, int badY) {

    if (n == 0) {
        a[badX][badY] = 0;
        return;
    }

    int xSq = badX >= (x + pow(2,n-1)) ? (x + pow(2,n-1)) : (x);
    int ySq = badY >= (y + pow(2,n-1)) ? (y + pow(2,n-1)) : (y);

    int type;
    if (badX >= (x + pow(2,n-1))) {
        if (badY >= (y + pow(2,n-1))) {
            type = 1;
        }
        else {
            type = 2;
        }
    }
    else {
        if (badY >= (y + pow(2,n-1))) {
            type = 4;
        }
        else {
            type = 3;
        }
    }

    fill(type,x,y, n);

    fillSq(xSq, ySq, n-1, badX, badY);
}

int main() {
    int n, x, y;
    cin >> n;
    cin >> x >> y;

    a = vector<vector<int>>((int)pow(2, n), vector<int>((int)pow(2, n)));

    fillSq(0,0,n,x-1,y-1);

    for (int i = 0; i < a.size(); ++i) {
        for (int j = 0; j < a[i].size(); ++j) {
            cout << a[i][j] << " ";
        }
        cout << endl;
    }
}
