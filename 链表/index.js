const a = {val: 'a'};
const b = {val: 'b'};
const c = {val: 'c'};

a.next = b;
b.next = c;

let p =  a;
while(p)  {
    p = p.next;
}
