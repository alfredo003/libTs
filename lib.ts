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

