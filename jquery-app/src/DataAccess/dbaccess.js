function SQLite(cfg) {
  if (typeof window.openDatabase === 'undefined') {
    return;
  }

  function log(str) {
    if (typeof console !== 'undefined') {
      console.log(str);
    }
  }
 var createTableBabyDetails = "CREATE TABLE IF NOT EXISTS BabyDetails ("+
 "IndexNo         integer PRIMARY KEY AUTOINCREMENT NOT NULL,"+
  "BirthWeight     float(50),"+
  "MotherIndexNo   integer,"+
  "Name            varchar(50),"+
  "Sex             varchar(50),"+
  "DateOfBirth     date,"+
  "RegDate         date,"+
  "CriticalStatus  varchar(50));" 
  
  var createTableEligibleFamilyRegisterTb="CREATE TABLE IF NOT EXISTS EligibleFamilyRegisterTb ("+
  "IndexNo           integer PRIMARY KEY AUTOINCREMENT NOT NULL,"+
  "WifeName          varchar(100) NOT NULL,"+
  "HusbundName       varchar(100),"+
  "Address           varchar(250),"+
  "BirthDay          date,"+
  "MarriedAge        integer,"+
  "EducationStatus   varchar(50),"+
  "Occupation        varchar(100),"+
  "RubellaStatus     boolean DEFAULT FALSE,"+
  "RegistrationDate  date,"+
  "Notes             varchar(300));"
  
  var createTableBabyGrowthChatTb = "CREATE TABLE IF NOT EXISTS BabyGrowthChatTb ("+
  "BabyIndexNo  integer NOT NULL,"+
  "Date       date NOT NULL,"+
  "Weight       float(50),"+
  "Height       float(50),"+
  "PRIMARY KEY (BabyIndexNo, 'Date'));"
    
  var createTableImmunizationDataTb="CREATE TABLE IF NOT EXISTS ImmunizationDataTb ("+
  "BabyIndexNo  integer NOT NULL,"+
  "VaccNo       integer NOT NULL,"+
  "'Date'       date,"+
  "PRIMARY KEY (BabyIndexNo, VaccNo));"
    
  var createTableFamilyPlaningDataTb = "CREATE TABLE IF NOT EXiSTS FamilyPlaningDataTb ("+
  "PlanNo        integer PRIMARY KEY NOT NULL,"+
  "PlaneDetails  integer);"

var createTableFamilyPlaningDetailsTb= "CREATE TABLE IF NOT EXiSTS FamilyPlaningDetailsTb ("+
  "IndexNo       integer NOT NULL,"+
  "FamilPlaneNo  integer NOT NULL,"+
  "AcceptedDate  date,"+
  "PRIMARY KEY (IndexNo, FamilPlaneNo));"


var createTableMotherVaccDataTb="CREATE TABLE IF NOT EXISTS MotherVaccDataTb ("+
  "VaccNo    integer PRIMARY KEY NOT NULL,"+
  "VaccName  varchar(100));"

var createTableMotherVaccDateTb="CREATE TABLE IF NOT EXISTS MotherVaccDateTb ("+
  "MotherIndexNo  integer NOT NULL,"+
  "VaccNo         integer NOT NULL,"+
  "'Date'         date,"+
  "PRIMARY KEY (MotherIndexNo, VaccNo));"
var createTableMidWIfeDailyReport = "CREATE TABLE IF NOT EXISTS MidWIfeDailyReport ("+
  "IndexNo                  integer NOT NULL,"+
  "'Date'                   date NOT NULL,"+
  "HomeLeftTime             time,"+
  "OfficeArrivalTime        time,"+
  "OfficeLeftTime           time,"+
  "HomeArrivalTime          time,"+
  "TotalHomesVisited        integer,"+
  "TotalNoMiles             float(50),"+
  "NoOfPrePregnantVisited   integer,"+
  "NoOfPostPregnantVisited  integer,"+
  "NoOfBabiesVisited        integer,"+
  "NoOfChildVisited         integer,"+
  "NoOfEligibleVisited      integer,"+
  "NoOfFamilyPlanes         integer,"+
  "PRIMARY KEY (IndexNo, 'Date'));"

var createTablePregnentMotherTb="CREATE TABLE IF NOT EXISTS PregnentMotherTb ("+
  "IndexNo                 integer PRIMARY KEY AUTOINCREMENT NOT NULL,"+
  "EligibleFamilyNo        integer,"+
  "RegDate                 date,"+
  "Name                    varchar(100) NOT NULL,"+
  "Address                 integer,"+
  "Age                     integer,"+
  "NumberOfPregnancy       integer,"+
  "LastPregnancyResult     integer,"+
  "CriticalStatus          varchar(150),"+
  "NumberOfWeeksPregnancy  integer,"+
  "ExpectDate              date,"+
  "ResidentialStatus       varchar(50),"+
  "TetunasStatus           boolean,"+
  "RubellaStatus           boolean,"+
  "RiskFactors             integer,"+
  "FirstComeWeight         float(50),"+
  "FirstComeWeeks          integer,"+
  "LastComeWeight          float(50),"+
  "LastComeWeek            integer,"+
  "BMIFirstCome            float(50),"+
  "BooldTestStatus         boolean,"+
  "VDRLtest                boolean,"+
  "DeliveryDate            date,"+
  "DelivaryPlace           varchar(50),"+
  "DelivaryOutcome         varchar(50),"+
  "OtherDetails            varchar(200));"
    
    
    var createTablePregnancyDetailsTb = "CREATE TABLE IF NOT EXISTS PregnancyDetailsTb ("+
  "IndexNo  integer NOT NULL,"+
  "PregNo   integer NOT NULL,"+
  "Result   varchar(50),"+
  "PRIMARY KEY (IndexNo, PregNo));"
    
var createTableVacDataTb = "CREATE TABLE  IF NOT EXISTS VacDataTb ("+
  "VaccNo    integer PRIMARY KEY NOT NULL,"+
  "VaccName  varchar(100));"


var createTableVitaminAData = "CREATE TABLE IF NOT EXISTS VitaminAData ("+
  "MedNo    integer PRIMARY KEY NOT NULL,"+
  "MedName  varchar(100));"
  
var createTableVitaminADoseTb="CREATE TABLE IF NOT EXISTS VitaminADoseTb ("+
  "BabyNo  integer NOT NULL,"+
  "MedNo   integer NOT NULL,"+
  "Dose    float(50),"+
  "PRIMARY KEY (BabyNo, MedNo));"
  
  function isNumber(val) {
    switch (typeof val) {
    case 'number':
      return true;
    case 'string':
      return (/^\d+$/).test(val);
    case 'object':
      return false;
    }
  }
  


  // Default Handlers
  function nullDataHandler(results) { }

  function errorHandler(error) {
    log('Oops. ' + error.message + ' (Code ' + error.code + ')');
  }

  var config = cfg || {}, db;
  
  config.shortName = config.shortName || 'mydatabase';
  config.version = config.version || '1.0';
  config.displayName = config.displayName || 'My SQLite Database';
  config.maxSize = 65536;
  config.defaultErrorHandler = config.defaultErrorHandler || errorHandler;
  config.defaultDataHandler = config.defaultDataHandler || nullDataHandler;

  try {
    db = openDatabase(config.shortName, config.version, config.displayName, config.maxSize);
  } catch (e) {
    if (e === 2) {
      log("Invalid database version.");
    } else {
      log("Unknown error " + e + ".");
    }

    return;
  }

  function execute(query, v, d, e) {
    var values = v || [],
      dH = d || config.defaultDataHandler,
      eH = e || config.defaultErrorHandler;

    if (!query || query === '') {
      return;
    }

    function err(t, error) {
      eH(error, query);
    }

    function data(t, result) {
      dH(result, query);
    }

    db.transaction(
      function (transaction) {
        transaction.executeSql(query, values, data, err);
      }
    );
  }

  function buildConditions(conditions) {
    var results = [], values = [], x;

    if (typeof conditions === 'string') {
      results.push(conditions);
    } else if (typeof conditions === 'number') {
      results.push("id=?");
      values.push(conditions);
    } else if (typeof conditions === 'object') {
      for (x in conditions) {
        if (conditions.hasOwnProperty(x)) {
          if (isNumber(x)) {
            results.push(conditions[x]);
          } else {
            results.push(x + '=?');
            values.push(conditions[x]);
          }
        }
      }
    }

    if (results.length > 0) {
      results = " WHERE " + results.join(' AND ');
    } else {
      results = '';
    }

    return [results, values];
  }

  function createTableSQL(name, cols) {
    var query = "CREATE TABLE " + name + "(" + cols + ");";

    return [query, []];
  }

  function dropTableSQL(name) {
    var query = "DROP TABLE " + name + ";";

    return [query, []];
  }

  function insertSQL(table, map) {
    var query = "INSERT INTO " + table + " (#k#) VALUES(#v#);", keys = [], holders = [], values = [], x;

    for (x in map) {
      if (map.hasOwnProperty(x)) {
        keys.push(x);
        holders.push('?');
        values.push(map[x]);
      }
    }

    query = query.replace("#k#", keys.join(','));
    query = query.replace("#v#", holders.join(','));

    return [query, values];
  }

  function updateSQL(table, map, conditions) {
    var query = "UPDATE " + table + " SET #k##m#", keys = [], values = [], x;

    for (x in map) {
      if (map.hasOwnProperty(x)) {
        keys.push(x + '=?');
        values.push(map[x]);
      }
    }

    conditions = buildConditions(conditions);

    values = values.concat(conditions[1]);

    query = query.replace("#k#", keys.join(','));
    query = query.replace("#m#", conditions[0]);

    return [query, values];
  }

  function selectSQL(table, columns, conditions, options) {
    var query = 'SELECT #col# FROM ' + table + '#cond#', values = [];

    if (typeof columns === 'undefined') {
      columns = '*';
    } else if (typeof columns === 'object') {
      columns.join(',');
    }

    conditions = buildConditions(conditions);

    values = values.concat(conditions[1]);

    query = query.replace("#col#", columns);
    query = query.replace('#cond#', conditions[0]);

    if (options) {
      if (options.limit) {
        query = query + ' LIMIT ?';
        values.push(options.limit);
      }
      if (options.order) {
        query = query + ' ORDER BY ?';
        values.push(options.order);
      }
      if (options.offset) {
        query = query + ' OFFSET ?';
        values.push(options.offset);
      }
    }

    query = query + ';';

    return [query, values];
  }

  function destroySQL(table, conditions) {
    var query = 'DELETE FROM ' + table + '#c#;';

    conditions = buildConditions(conditions);

    query = query.replace('#c#', conditions[0]);

    return [query, conditions[1]];
  }

  function initDB(data, error){

	execute(createTableBabyDetails, [], data, error);
	execute(createTableEligibleFamilyRegisterTb, [], data, error);
	execute(createTableBabyGrowthChatTb, [], data, error);
	execute(createTableImmunizationDataTb, [], data, error);
	execute(createTableFamilyPlaningDataTb, [], data, error);
	execute(createTableFamilyPlaningDetailsTb, [], data, error);
	execute(createTableMotherVaccDataTb, [], data, error);
	execute(createTableMotherVaccDateTb, [], data, error);
	execute(createTableMidWIfeDailyReport, [], data, error);
	execute(createTablePregnentMotherTb, [], data, error);
	execute(createTablePregnancyDetailsTb, [], data, error);
	execute(createTableVacDataTb, [], data, error);
	execute(createTableVitaminAData, [], data, error);
	execute(createTableVitaminADoseTb, [], data, error);
 
}

  return {
    database: db,
    createTable: function (name, cols, data, error) {
      var sql = createTableSQL(name, cols);
      execute(sql[0], sql[1], data, error);
    },
    dropTable: function (name, data, error) { 
      var sql = dropTableSQL(name);
      execute(sql[0], sql[1], data, error);
    },
    insert: function (table, map, data, error) {
      var sql = insertSQL(table, map);
      execute(sql[0], sql[1], data, error);
    },
    update: function (table, map, conditions, data, error) {
      var sql = updateSQL(table, map, conditions);
      execute(sql[0], sql[1], data, error);
    },
    select: function (table, columns, conditions, options, data, error) {
      var sql = selectSQL(table, columns, conditions, options);
      execute(sql[0], sql[1], data, error);
    },
    destroy: function (table, conditions, data, error) {
      var sql = destroySQL(table, conditions);
      execute(sql[0], sql[1], data, error);
    },
    init: function (data, error){
    	initDB(data, error );
    }
  };
}