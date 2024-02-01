cd Desktop

wget https://c8.alamy.com/comp/2BF3DJ6/green-binary-code-computer-virus-ascii-3d-illustration-scary-skull-2BF3DJ6.jpg -O "virus.jpg"

say warning, virus

for i in {1..25}
do
   cp virus.jpg virus$i.jpg
   open virus$i.jpg
   open -a "Google Chrome" http://www.google.com
done