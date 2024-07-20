export function strrev(str:string[]):string
{
    let i:number= 0;
    let len:number =0;
    let tmp:string;

    while(str[len])
        len++;
    len-=1;
    while(i < len)
    {
        tmp = str[i];
        str[i] = str[len];
        str[len] = tmp;

        i++;
        len--;
    }
    return (str.join(''));
}
export function strchr(s:string[],c:string):number
{
    let i:number = 0;
    while(s[i])
    {
        if(s[i] === c) return (i);
        ++i;
    }
    return (-1);
}
export function strspn(s:string[],accept:string[]):number
{
    let i:number = 0;

    while(s[i])
    {
            if(strchr(accept,s[i]) === -1) break;
         ++i;
    }
    return (i);
}
export function has_char(s:string[],c:string):number
{
    let i:number =0;
    while(s[i])
    {
        if(s[i] === c) return (1);
        ++i;
    }
    return (0);
}
export function union(s1:string[],s2:string[]):string
{
    let i:number=0;
    let j:number=0;
    let seen:string[] = [];
    
    while(s1[i])
    {
        if(has_char(s2,s1[i]) && !has_char(seen,s1[i]))
        {
            seen[j] = s1[i];
            j++;
        }
        i++;
    }
    return (seen.join(''));
}
export function is_power_of_2(num:number):boolean
{
    if(num === 0)
        return false;
    return (num & (num - 1)) === 0;
}
export function last_word(word:string[]):string
{
    let lastWord:string[] = [];
    let i:number = 0;
    let j:number = 0;
    const CODE1:string = String.fromCharCode(33);
    const CODE2:string = String.fromCharCode(126);

    while(word[i])
    {
        if(word[i] === ' ' && word[i+1] >= CODE1 && word[i] <= CODE2)
            j = i + 1;
        i++;
    }
    while(word[j] >= CODE1 && word[j] <= CODE2)
    {
        lastWord[j] = word[j];
        j++;
    }

    return (lastWord.join(''));
}
export function max(tab:number[],len:number):number
{
    let i:number = 0;
    let result:number = 0;

    if(len === 0)
        return (0);
    result = tab[i];
    while(len > i)
    {
        if(result < tab[i])
            result = tab[i];
        i++;
    }
    return(result);
}
export function print_bits(n:number):string
{
    let num = n.toString(2);
     let result:string[] = [];
     let i:number =0;
     let paddin:string = "0".repeat(8-num.length);

     num = paddin+num;

     while(i < num.length)
     {
        result[i] = num[i];
        i++;
     }
     return (result.join(''));
}
