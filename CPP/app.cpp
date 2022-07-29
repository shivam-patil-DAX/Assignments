#include <string>
#include <fstream>
#include <iostream>
#include <vector>
#include <algorithm> 
#include <cctype>
#include <locale>
using namespace std;


class Myclass{

    public:
    string arr[9];
    Myclass(string data[]){
        for(int i=0;i<9;i++){
            arr[i]=data[i];
        }
    }
};



static inline void ltrim(std::string &s) {
    s.erase(s.begin(), std::find_if(s.begin(), s.end(), [](unsigned char ch) {
        return !std::isspace(ch);
    }));
}

static inline void rtrim(std::string &s) {
    s.erase(std::find_if(s.rbegin(), s.rend(), [](unsigned char ch) {
        return !std::isspace(ch);
    }).base(), s.end());
}

static inline void trim(std::string &s) {
    ltrim(s);
    rtrim(s);
}



std::vector<std::string> readFileToVector(const std::string& filename)
{
    std::ifstream source;
    source.open(filename);
    std::vector<std::string> lines;
    std::string line;
    while (std::getline(source, line))
    {
        lines.push_back(line);
    }
    return lines;
}

vector<Myclass> obj;
void displayVector(const std::vector<std::string> v)
{
    int arrr[]={15,15,15,10,5,20,15,15,6};
    map<int, string> data;
    for (int i(0); i != v.size(); ++i)
        {   
            string c="       ";
            string l=v[i]+c;
            string arr[9];
            int k=0;
            for(int j=0;j<9;j++){
                arr[j]=l.substr(k,arrr[j]);
                k+=arrr[j];
                trim(arr[j]);

            }
            Myclass o(arr);
            obj.push_back(o);
        }
        
}
string myfun(int a){
    string f;
    for(int i=0;i<a;i++){
        f+=' ';
    }
    return f;
}
void envlope(string arr[]){
        string name;
        string add1;
        string add2;
        string a=" ";
        if(arr[1][0]!='\0'){
            name=arr[1]+a+arr[0]+myfun(30-arr[1].size()-arr[0].size()-1);
        }
        else{
            name=arr[0]+myfun(30-arr[0].size());
        }
        if(arr[4][0]!='\0'){
            add1=arr[4]+a+arr[5]+myfun(25-arr[4].size()-arr[5].size()-1);
        }
        else{
            add1=arr[5]+myfun(25-arr[5].size());
        }
        int i=0;
        if(arr[6][0]!='\0'){
            add2=arr[6]+", "+arr[7];
            i+=2;
        }
        else{
            add2=arr[7];
        }
        if(add2[0]!='\0'){
            i+=1;
            add2+=" "+arr[8]+myfun(36-arr[6].size()-arr[7].size()-arr[8].size()-i);
            
        }
        else{
            add2+=arr[8]+myfun(36-arr[6].size()-arr[7].size()-arr[8].size()-i);
        }
    
        cout<<name<<'\n';
        cout<<add1<<'\n';
        cout<<add2<<'\n';
    
}
void fixed_format(string arr[]){
        string name;
        string add1;
        string add2;
        string a=" ";
        if(arr[1][0]!='\0'){
            name=arr[1]+a+arr[0]+myfun(30-arr[1].size()-arr[0].size()-1);
        }
        else{
            name=arr[0]+myfun(30-arr[0].size());
        }
        if(arr[4][0]!='\0'){
            add1=arr[4]+a+arr[5]+myfun(25-arr[4].size()-arr[5].size()-1);
        }
        else{
            add1=arr[5]+myfun(25-arr[5].size());
        }
        int i=0;
        if(arr[6][0]!='\0'){
            add2=arr[6]+", "+arr[7];
            i+=2;
        }
        else{
            add2=arr[7];
        }
        if(add2[0]!='\0'){
            i+=1;
            add2+=" "+arr[8]+myfun(36-arr[6].size()-arr[7].size()-arr[8].size()-i);
            
        }
        else{
            add2+=arr[8]+myfun(36-arr[6].size()-arr[7].size()-arr[8].size()-i);
        }
    
        cout<<name;
        cout<<add1;
        cout<<add2<<'\n';
    
}

void csv(string arr[]){
        string name;
        string add1;
        string add2;
        string a=" ";
        if(arr[1][0]!='\0'){
            name=arr[1]+a+arr[0];
        }
        else{
            name=arr[0];
        }
        if(arr[4][0]!='\0'){
            add1=arr[4]+a+arr[5];
        }
        else{
            add1=arr[5];
        }
        int i=0;
        if(arr[6][0]!='\0'){
            add2=arr[6]+", "+arr[7];
            i+=2;
        }
        else{
            add2=arr[7];
        }
        if(add2[0]!='\0'){
            i+=1;
            add2+=" "+arr[8];
            
        }
        else{
            add2+=arr[8];
        }
        if(name[0]!='\0')
        cout<<"\""<<name<<"\",";
        if(add1[0]!='\0')
        cout<<"\""<<add1<<"\",";
        if(add2[0]!='\0')
        cout<<"\""<<add2<<"\"\n";
    
}

int main(int argc,  char **argv)
{
    
    std::string charactersFilename(argv[2]);
    std::vector<std::string> characters = readFileToVector(charactersFilename);

    displayVector(characters);
     cout<<'\n'<<'\n'<<"Envlope"<<'\n'<<'\n';
    for(int i=0;i<obj.size();i++){
        envlope(obj[i].arr);
    }
    cout<<'\n'<<'\n'<<"Fixed format"<<'\n'<<'\n';
    for(int i=0;i<obj.size();i++){
        fixed_format(obj[i].arr);
    }
    cout<<'\n'<<'\n'<<"CSV"<<'\n'<<'\n';
    for(int i=0;i<obj.size();i++){
        csv(obj[i].arr);
    }
}