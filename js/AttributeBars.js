/**
 * Object the represents three attribute bars and the ability to move the up or down.
 * @constructor
 */
function AttributeBars()
{
    /**
     * Animates the bar moving between percent values.
     * @param name
     * @param newPercent
     * @param currentPercent
     */
    function animate(name, newPercent, currentPercent)
    {
        //Makes sure the value is between the min and max percent values.
        if(newPercent > 100)
        {
            newPercent = 100;
        }
        else if(newPercent < 0)
        {
            newPercent = 0;
        }

        var element = document.getElementById(name);
        var id = setInterval(frame, 5);
        function frame()
        {
            //Stopping animation condition.
            if(currentPercent > 100 || currentPercent < 0 || currentPercent == newPercent)
            {
                clearInterval(id);
            }
            else
            {
                //Move the width value up or down depending if the new value is larger or smaller.
                  if(currentPercent > newPercent)
                  {
                      currentPercent -= 1;
                      element.style.width = (currentPercent) + "%";
                  }
                  else
                  {
                      currentPercent += 1;
                      element.style.width = (currentPercent) + "%";
                  }
            }
        }
    }

    /**
     * Calculates the percentage that the innerElement takes up of outerElement.
     * @param innerElement
     * @param outerElement
     * @returns {number}
     */
    function calcCurrentWidthPercent(innerElement, outerElement)
    {
        return Math.floor(document.getElementById(innerElement).offsetWidth / document.getElementById(outerElement).offsetWidth * 100);
    }

    /**
     * Sets the first attribute bar to a new value.
     * @param percent
     */
    this.setAttributeBar_1 = function(percent)
    {
        var currentPercent = calcCurrentWidthPercent('attributeBar_1_animate','attributeBar_1');
        animate('attributeBar_1_animate',percent, currentPercent);
    };

    /**
     * Sets the second attribute bar to a new value.
     * @param percent
     */
    this.setAttributeBar_2 = function(percent)
    {
        var currentPercent = calcCurrentWidthPercent('attributeBar_2_animate','attributeBar_2');
        animate('attributeBar_2_animate',percent, currentPercent);
    };

    /**
     * Sets the third attribute bar to a new value.
     * @param percent
     */
    this.setAttributeBar_3 = function(percent)
    {
        var currentPercent = calcCurrentWidthPercent('attributeBar_3_animate','attributeBar_3');
        animate('attributeBar_3_animate',percent, currentPercent);
    };

    /**
     * Increments / Decrements the first attribute bar.
     * @param changePercent
     */
    this.changeAttributeBar_1 = function(changePercent)
    {
        var currentPercent = calcCurrentWidthPercent('attributeBar_1_animate','attributeBar_1');
        animate('attributeBar_1_animate',currentPercent + changePercent, currentPercent);
    };

    /**
     * Increments / Decrements the second attribute bar.
     * @param changePercent
     */
    this.changeAttributeBar_2 = function(changePercent)
    {
        var currentPercent = calcCurrentWidthPercent('attributeBar_2_animate','attributeBar_2');
        animate('attributeBar_2_animate',currentPercent + changePercent, currentPercent);
    };

    /**
     * Increments / Decrements the third attribute bar.
     * @param changePercent
     */
    this.changeAttributeBar_3 = function(changePercent)
    {
        var currentPercent = calcCurrentWidthPercent('attributeBar_3_animate','attributeBar_3');
        animate('attributeBar_3_animate',currentPercent + changePercent, currentPercent);
    };
    
}