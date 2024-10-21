export class Utils{

    parseDate(date: string){
        if(date != null){
          const normalizedDateStr = date.replace('a. m.', 'AM').replace('p. m.', 'PM');
          const parsedDate = new Date(normalizedDateStr);
          return parsedDate;
        }
        return new Date()
    
    }

}