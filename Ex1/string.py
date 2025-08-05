string = "1234567890"

#affiche cette string de caractere en inverser en utilisant une boucle for
for i in range(len(string)-1, -1, -1):
    print(string[i], end="")

#affiche cette string de caractere en inverser en utilisant une boucle while
i = len(string)-1
while i >= 0:
    print(string[i], end="")
    i -= 1