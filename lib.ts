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
