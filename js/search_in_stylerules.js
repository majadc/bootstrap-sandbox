let searchCssRuleset = {};
  (function(){

    let cssRuleset = [];
    let formSearchStylerulesInfo = document.getElementById("formSearchStylerulesInfo");
    let formSearchStylerulesInput = document.getElementById("formSearchStylerulesInput");
    let formSearchStylerulesOutputJs = document.getElementById("formSearchStylerulesOutputJs");

    this.cssRulesetSearch = function (...args) {
      for ( const arg of args ) {
        let rule = arg.split('}');
        cssRuleset =  cssRuleset.concat(rule);
      }
      cssRuleset = cssRuleset.filter(function( rule ){
        return rule !== "\n"
      });
      for ( let i = 0;  i < cssRuleset.length; i++ ) {
        cssRuleset[i] = `${cssRuleset[i]}}\n`;
      }
    }
    
    document.getElementById("formSearchStylerulesSubmit").addEventListener("click", function(e){
      searchRuleset();
      e.preventDefault();
    });
    

    function searchRuleset () {
      resetFormSearchStylerules();

      let formSearchStylerulesInputValue = formSearchStylerulesInput.value;
      
      if ( validationFormSearchStylerulesRequired(formSearchStylerulesInputValue) ) {
        let bsRules = getCssRuleset(formSearchStylerulesInputValue);
        if  ( validationFormSearchStylerulesNoResult(bsRules) ) {
          formSearchStylerulesOutputJs.innerHTML = colorCssRuleset(formSearchStylerulesInputValue);
          
        } 
      }
        
    }
  
    function getCssRuleset ( string ) {
      let result = [];
      for (let rulset of cssRuleset) {
        if ( rulset.indexOf( string ) > 0 ) {
          result.push(rulset);
        }
      }
      return result.join(' ');
    }

    
    function colorCssRuleset (string) {
      let arrayRulesSetResult = getCssRuleset( string ).split('\n');
      let i = 0;
      for ( let item of arrayRulesSetResult ) {
          if ( item.indexOf(string) > 0 ) {
            arrayRulesSetResult[i] = `<span class="mdc-stylerules-property">${item}</span>`;
          }
         i++;
      }
      return arrayRulesSetResult.join('\n');
    }

    function resetFormSearchStylerules () {
    
      formSearchStylerulesInput.classList.remove("invalid");
      formSearchStylerulesOutputJs.innerHTML = "";
      
      formSearchStylerulesInfo.innerHTML = "";
      formSearchStylerulesInfo.classList.remove("show");
      formSearchStylerulesInfo.setAttribute("aria-hidden", "true");
    }

    function validationFormSearchStylerulesRequired ( string ) {
      if ( string === '' ) {
        formSearchStylerulesInput.classList.add("invalid");
        formSearchStylerulesInfo.innerHTML = "Fill the field.";
        formSearchStylerulesInfo.classList.add("show");
        formSearchStylerulesInfo.setAttribute("aria-hidden", "false");
        return false;
      } else return true;
    }
    function validationFormSearchStylerulesNoResult ( result) {
      if ( result === '' ) {
        formSearchStylerulesInfo.innerHTML = "Nothing found.";
        formSearchStylerulesInfo.classList.add("show");
        formSearchStylerulesInfo.setAttribute("aria-hidden", "false");
        return false;
      } else return true;
    }

  }).apply(searchCssRuleset);
