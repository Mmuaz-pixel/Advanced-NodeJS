#!/bin/bash 

target=${1:-http://localhost:3000/memory}

while true
do 
    for i in $(seq 100)
    do 
        curl $target > /dev/null & 
    done 

    wait 
done