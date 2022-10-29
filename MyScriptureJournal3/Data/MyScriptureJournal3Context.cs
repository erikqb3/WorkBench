using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyScriptureJournal3.Models;

    public class MyScriptureJournal3Context : DbContext
    {
        public MyScriptureJournal3Context (DbContextOptions<MyScriptureJournal3Context> options)
            : base(options)
        {
        }

        public DbSet<MyScriptureJournal3.Models.ScriptNotes> ScriptNotes { get; set; } = default!;
    }
