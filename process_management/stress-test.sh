#!/bin/bash 

target=${1:-http://localhost:8080/api}

while true
do 
    for i in $(seq 1000)
    do 
        curl $target > /dev/null & 
    done 

    wait 
done