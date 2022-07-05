var MyObject = function(){
    this.getBlankSpace=function(str){
        var countofBlankSpace=0;
        for(var i in str){
            if(str[i]===" ")
            countofBlankSpace++;
        }
        return countofBlankSpace;
    }

    this.getStatements=function(str){
        var countofStatements=0;
        for(var i in str){
            if(str[i]===".")
            countofStatements++;
        }
        return countofStatements;
    }

    this.convertToTitleCase=function(str){
            str = str.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
            return str.join(' ');
         }

    this.getComma=function(str){
        var countofcomma=0;
        for(var i in str){
            if(str[i]===",")
            countofcomma++;
        }
        return countofcomma;
    }

    this.vowel_list=function(str){
        let vowelList = 'Aa'
        let vowelsCount = 0;

        for(var i = 0; i < str.length ; i++)
        {
            if (vowelList.indexOf(str[i]) !== -1)
            {
                vowelsCount += 1;
            }
        }
        return vowelsCount;
        
        
    }
    

    this.Specific_Word_Count=function(str, find){
        {
            return (str.split(find)).length - 1;
        
    }
    }

    this.Word_Count=function(str){
         var wordCount = 0;
         for(var i in str){
             if(str[i]===" ")
            c= wordCount++;
            a= c+3 ;
         }
         return a; 
    }
           
};



