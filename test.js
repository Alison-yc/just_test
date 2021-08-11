function digitalRoot( digital ) {
    // write code here
    let num = 0
    while(digital.toString().length > 1){
        while(digital.toString().length > 1){
            num = digital
            digital = ~~(digital/10)
            digital += num%10
            
        }

    }
    
    console.log(digital)
}
digitalRoot(2145353)