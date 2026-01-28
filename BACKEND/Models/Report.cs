using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace BACKEND.Models;

public partial class Report
{
    [Key]
    public int ReportId { get; set; }

    [StringLength(50)]
    public string? ReportType { get; set; }

    public int? CreatedBy { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? CreatedAt { get; set; }

    [ForeignKey("CreatedBy")]
    [InverseProperty("Reports")]
    public virtual User? CreatedByNavigation { get; set; }
}
