using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hour.Tracker.Backend.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace Hour.Tracker.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<List<Entry>> Get()
        {
            var list = new List<Entry>();
            list.Add(new Entry() { Id = 1, Name = "Lilly", Num = 0215 });
            list.Add(new Entry() { Id = 2, Name = "Lucy", Num = 2545 });
            return list;
        }

        [HttpGet("{entry}")]
        public ActionResult<IEnumerable<string>> Get(Entry garou)
        {
            return new string[] { "value1", "value2" };
        }



        //[HttpGet]
        //public IEnumerable<Entry> GetAll()
        //{
        //    var list = new List<Entry>();
        //    list.Add(new Entry() { Id = 1 , Name = "Lilly", Num = 0215 });
        //    list.Add(new Entry() { Id = 2, Name = "Lucy", Num = 2545 });
        //    return list;
        //}


        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public ActionResult<Entry> Post([FromBody] List<Entry> values, int thisisnum)
        {
            return new Entry() {Id = 5, Name="Moo",Num= 256 };
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    [Route("api/book")]
    public class Book 
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get(Entry garou)
        {
            return new string[] { "value1", "value2" };
        }
    }
}
